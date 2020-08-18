const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    nome: "lembrete",
    alternativas: ["lembrete", "notificar"],
    run: async(client, message, args) => {

        let tempo = args[0]
        if(!tempo) return message.reply("Você não inseriu o tempo que deseja ser notificado. (Formato: 1s, 1m 1h, 1d)")

        let texto = args.slice(1).join(" ")
        if(!texto) return message.reply("Você não inseriu o motivo que deseja ser notificado")

        message.reply(`Pode deixar, daqui ${tempo} irei te avisar.`)

        setTimeout(async () => {

            var embed = {
                title: "<a:sino:745040564939915284> ⋅ Lembrete.",
                description: texto,
                color: "AQUA"
            }
            let msg = await message.reply({ embed: embed })

            msg.react("745040564939915284")

        }, ms(tempo))

    }
}