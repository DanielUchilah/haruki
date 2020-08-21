const Discord = require('discord.js')

module.exports = {
    nome: "setprefix",
    alternativas: ["setprefix", "changeprefix"],
    run: async(client, message, args, owner, database) => {

        if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não tem permissão de executar este tipo de comandos, bobo(a). A permissão necessária é **Gerenciar servidor.**")
        if(!args[0]) return message.reply("Você não inseriu a prefix que deseja colocar.")

        if(args[0].length >= 5) return message.reply("Eu limito a prefix em até 4 caracteres, não irei autorizar a você que coloque uma prefix de 5 ou mais caracteres.")

        database.ref(`Servidores/Prefix/${message.guild.id}`).set({
            prefixo: args[0]
        })
        message.reply("Prefix alterada, já está disponivel para uso.")

    }
}