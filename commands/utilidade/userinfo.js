const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    nome: "userinfo",
    alternativas: ["userinfo"],
    run: async(client, message, args) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

        if(!membro) {

            let status = "Online"
            
            if(message.author.presence.status == "offline") status = "Offline"
            if(message.author.presence.status == "dnd") status = "Ocupado"
            if(message.author.presence.status == "idle") status = "Ausente"

            var embed = {
                title: "<:info:744724523076681790> ⋅ Informações do usuário.",
                description: `🛡️ **ID** ${message.author.tag}/${message.author.id}\n🌎 **Contra criada em** ${moment(message.author.createdAt).format("DD/MM/YYYY HH:mm")}\n🤖 **Bot** Não\n\n<a:dancinha:744329305516933201> **Status** ${status}`,
                color: "AQUA"
            }
            message.reply({ embed: embed })

        } else {
            
            let bot = "Não"
            let status = "Online"
            
            if(membro.presence.status == "offline") status = "Offline"
            if(membro.presence.status == "dnd") status = "Ocupado"
            if(membro.presence.status == "idle") status = "Ausente"
    
            if(membro.bot == true) bot = "Sim"
    
            var embed = {
                title: "<:info:744724523076681790> ⋅ Informações do usuário.",
                description: `🛡️ **ID** ${membro.user.tag}/${membro.id}\n🌎 **Contra criada em** ${moment(membro.user.createdAt).format("DD/MM/YYYY HH:mm")}\n🤖 **Bot** ${bot}\n\n<a:dancinha:744329305516933201> **Status** ${status}`,
                color: "AQUA"
            }
            message.reply({ embed: embed })

        }
    }
}