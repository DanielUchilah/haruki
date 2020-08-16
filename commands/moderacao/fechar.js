const Discord = require('discord.js')

module.exports = {
    nome: "fechar",
    alternativas: ["fechar", "lock"],
    run: async(client, message, args) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão para utilizar este comando, bobo(a). A permissão necessária é **Gerenciar canais.**")

        message.channel.updateOverwrite(message.guild.roles.everyone, { "SEND_MESSAGES": false })
        message.reply("Canal bloqueado com sucesso, use **h/unlock** para desbloquear.")

    }
}