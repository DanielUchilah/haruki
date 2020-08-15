const Discord = require('discord.js')

module.exports = {
    nome: "renameemoji",
    alternativas: ["renameemoji", "renomearemoji", "remote"],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply("Você não inseriu o novo nome que deseja.")
        if(!args[1]) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        let [ emojiString ] = /<a?:[^\W]+:[\d]+>/g.exec(args[1]);
        let emojiMatched = message.guild.emojis.cache.find(e => e.toString() === emojiString);
        if(!emojiMatched) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        emojiMatched.edit({ name: args[0] }).then(emoji => {

            message.reply(`${emoji} ⋅ Emoji renomeado.`)

        }).catch(err => {

            message.reply("Não consegui renomear esse emoji, sinto muito...")

        })


    }
}