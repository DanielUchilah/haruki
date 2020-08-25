const Discord = require('discord.js')

module.exports = {
    nome: "desbloquear",
    alternativas: ["desbloquear", "unlock"],
    run: async(client, message, args) => {

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send("Então... Eu não possuo permissão de enviar mensagens no servidor, peça para um administrador gerenciar meu cargo.").catch(err => { return });
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("Então... Eu não possuo permissão de gerenciar canais no servidor, peça para um administrador gerenciar meu cargo.")

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão para utilizar este comando, bobo(a). A permissão necessária é **Gerenciar canais.**")

        message.channel.updateOverwrite(message.guild.roles.everyone, { "SEND_MESSAGES": true })
        message.reply("Canal desbloqueado com sucesso, use **h/lock** para bloquear.")

    }
}