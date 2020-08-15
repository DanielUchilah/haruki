const Discord = require('discord.js')

module.exports = {
    nome: "convite",
    alternativas: ["convite", "invite"],
    run: async(client, message, args) => {

        var embed = {
            title: "<a:rsrs:744303388535029871> ⋅ Ficou interessado em mim?",
            fields: [
                {
                    name: `Suporte`,
                    value: "Entre em meu servidor de suporte https://discord.gg/aPB7PYM",
                },
                {
                    name: `Me adicione`,
                    value: "Me convide para seu servidor https://discord.js.org"
                },
                {
                    name: `Lista de comandos`,
                    value: "Use h/help para visualizar a minha lista de comandos."
                }
            ],
            color: "AQUA"
        }
        message.reply({ embed: embed })

    }
}