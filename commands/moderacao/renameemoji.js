const Discord = require('discord.js')

module.exports = {
    nome: "renameemoji",
    alternativas: ["renameemoji", "renomearemoji", "remote"],
    run: async(client, message, args) => {

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send("Então... Eu não possuo permissão de enviar mensagens no servidor, peça para um administrador gerenciar meu cargo.").catch(err => { return });
        if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("Então... Eu não possuo permissão de gerenciar emojis no servidor, peça para um administrador gerenciar meu cargo.")

        if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("Você não tem a permissão necessária para executar esse coamndo, bobo(a). A permissão necessária é **Gerenciar emojis.**")

        if(!args[0]) return message.reply("Você não inseriu o novo nome que deseja.")
        if(!args[1]) return message.reply("Não encontrei nenhum emoji válido, sinto muito...")

        let [ emojiString ] = /<a?:[^\W]+:[\d]+>/g.exec(args[1]);
        let emojiMatched = message.guild.emojis.cache.find(e => e.toString() === emojiString);
        if(!emojiMatched) return message.reply("Não encontrei esse emoji no servidor, sinto muito...")

        emojiMatched.edit({ name: args[0] }).then(emoji => {

            message.reply(`${emoji} ⋅ Emoji renomeado.`)

        }).catch(err => {

            message.reply("Não consegui renomear o emoji, sinto muito... Verifique se você colocou acento no emoji, o discord não aceita.")

        })


    }
}