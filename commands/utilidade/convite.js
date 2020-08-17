const Discord = require('discord.js')

module.exports = {
    nome: "convite",
    alternativas: ["convite", "invite"],
    run: async(client, message, args) => {

        var embed = {
            title: "<a:rsrs:744303388535029871> ⋅ Ficou interessado em mim?",
            fields: [
                {
                    name: `<:suporte:744321561896681525> Suporte`,
                    value: "Entre em meu servidor de suporte https://discord.gg/aPB7PYM",
                },
                {
                    name: `📎 Acesse meu site`,
                    value: "Acesse https://harukibot.online para ver meus comandos ou até me adicionar."
                }
            ],
            color: "AQUA"
        }
        message.reply({ embed: embed })

    }
}