const { readdirSync } = require('fs')
const Ascii = require('ascii-table')

let tabela = new Ascii("Carregando...")
tabela.setHeading("Comandos", "Status")

module.exports = (client) => {

    readdirSync('./commands/').forEach(pasta => {

    const comandos = readdirSync(`./commands/${pasta}/`)     

        for(let arq in comandos) {

            let comando = require(`./commands/${pasta}/${arq}`);

            if(comando.nome) {

                client.commands.set(comando.nome, comando)
                tabela.addRow(arq, '✅')

            } else {

                tabela.addRow(arq, '❌ -> este comando está vázio.')
                continue;

            }
            if(comando.alternativas && Array.isArray(comando.alternativas)) comando.alternativas.forEach(x => client.alternativas.set(x, comando.nome))

        }

    })
    console.log(tabela.toString())

}