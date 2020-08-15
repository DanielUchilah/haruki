const Discord = require('discord.js')

module.exports = {
    nome: "deleteemoji",
    alternativas: ["deletaremoji", "deleteemoji", "dlemoji", "removeemoji"],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        let [ emojiString ] = /<a?:[^\W]+:[\d]+>/g.exec(args[0]);
        let emojiMatched = message.guild.emojis.cache.find(e => e.toString() === emojiString);
        if(!emojiMatched) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        emojiMatched.delete().then(() => {

            message.reply("Emoji deletado com sucesso.")

        }).catch(err => {

            message.reply("Não consegui deletar este emoji, sinto muito...")

        })

    }
}