const Discord = require('discord.js')

module.exports = {
    nome: "desbloquear",
    alternativas: ["desbloquear", "unlock"],
    run: async(client, message, args) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão para utilizar este comando, bobo(a). A permissão necessária é **Gerenciar canais.**")

        message.channel.updateOverwrite(message.guild.roles.everyone, { "SEND_MESSAGES": true })
        message.reply("Canal desbloqueado com sucesso, use **h/lock** para bloquear.")

    }
}