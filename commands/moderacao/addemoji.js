const Discord = require('discord.js')

module.exports = {
    nome: "addemoji",
    alternativas: ["addemoji", "adicionaremoji"],
    run: async(client, message, args) => {

        if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não tem a permissão necessária para utilizar este comando, bobo(a). A permissão necessária é **Gerenciar servidor.**")

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