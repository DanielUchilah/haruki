const Discord = require('discord.js')

module.exports = {
    nome: "nsfw",
    alternativas: ["nsfw"],
    run: async(client, message, args) => {

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send("Então... Eu não possuo permissão de enviar mensagens no servidor, peça para um administrador gerenciar meu cargo.").catch(err => { return });
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("Então... Eu não possuo permissão de gerenciar canais no servidor, peça para um administrador gerenciar meu cargo.")

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não pode setar NSFW nesse canal boba(o). A permissão necessária é **Gerenciar canais.**")

        message.channel.setNSFW(true, "Foi executado o comando de NSFW")
        message.reply("<a:rsrs:744303388535029871> ⋅ Canal atualizado.")

    }
}