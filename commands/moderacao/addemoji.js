const Discord = require('discord.js')

module.exports = {
    nome: "addemoji",
    alternativas: ["addemoji", "adicionaremoji"],
    run: async(client, message, args) => {

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send("Então... Eu não possuo permissão de enviar mensagens no servidor, peça para um administrador gerenciar meu cargo.").catch(err => { return });
        if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("Então... Eu não possuo permissão de gerenciar emojis no servidor, peça para um administrador gerenciar meu cargo.")

        if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("Você não tem a permissão necessária para executar esse coamndo, bobo(a). A permissão necessária é **Gerenciar emojis.**")

        let emoji = message.attachments.first()
        
        if(!args[0]) return message.reply("Você não inseriu o nome do emoji que deseja colocar...")
        if(!emoji) {
            
            message.guild.emojis.create(args[1], args[0]).then(async emoji => {

                message.reply(`${emoji} ⋅ Emoji criado com sucesso.`)
    
            }).catch(err => {
    
                message.reply(`Sinto muito, mas eu não consegui adicionar este emoji.`)
    
            })
        
        } else {

            message.guild.emojis.create(emoji.url, args[0]).then(async emoji => {

                message.reply(`${emoji} ⋅ Emoji criado com sucesso.`)
    
            }).catch(err => {
    
                message.reply(`Sinto muito, mas eu não consegui adicionar este emoji.`)
    
            })

        }
    }
}