const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    nome: "emoji",
    alternativas: ["emoji", "emote"],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        if(!args[0].includes(">")) message.reply("Sinto muito mas, eu só aceito emoji custom...")

        let [ emojiString ] = /<a?:[^\W]+:[\d]+>/g.exec(args[0]);
        let emoji = message.guild.emojis.cache.find(e => e.toString() === emojiString);
        if(!emoji) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        let animado = "Sim"

        if(emoji.animated == false) animado = "Não"

        var embed = {
            title: `${emoji} ⋅ Informações do emoji.`,
            description: `💁 **Nome:** ${emoji.name}\n🧷 **Criado em:** ${moment(emoji.createdAt).format("DD/MM/YYYY HH:mm")}\n:paperclip: **Link:** [Clique aqui](${emoji.url})\n<a:dancinha:744329305516933201> **Animado:** ${animado}.`,
            color: "AQUA",
            image: {
                url: emoji.url
            }
        }
        message.reply({ embed: embed })

    }
}