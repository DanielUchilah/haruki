const { readdirSync } = require("fs");
const ascii = require("ascii-table");

let tabela = new ascii("Carregando...");
tabela.setHeading("Comandos", "Status");

module.exports = (client) => {

    readdirSync("./commands/").forEach(pasta => {

        const comandos = readdirSync(`./commands/${pasta}/`).filter(file => file.endsWith(".js"));

        for (let arq of comandos) {
            let comando = require(`../commands/${pasta}/${arq}`);
    
            if(comando.nome) {

                client.comandos.set(comando.nome, comando)
                tabela.addRow(arq, '✅')

            } else {

                tabela.addRow(arq, '❌')
                continue;

            }
            if(comando.alternativas && Array.isArray(comando.alternativas)) comando.alternativas.forEach(x => client.alternativas.set(x, comando.nome))

        }

    })
    console.log(tabela.toString())

}