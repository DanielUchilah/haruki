const Discord = require('discord.js')

module.exports = {
    nome: "kick",
    alternativas: ["kick", "expulsar"],
    run: async(client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não tem permissão para utilizar este tipo de comando, bobo(a). A permissão necessária é **Expulsar membros.**")

        const membro = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply("Você não inseriu um membro válido.")
        
        if(membro.id === message.author.id) return message.reply("Você não pode se expulsar bobinho(a). :pensive:")

        if(message.member.roles.highest.rawPosition <= membro.roles.highest.rawPosition) return message.reply("Você possui um cargo inferior ou igual ao usuário mencionado, serei incapaz de expulsar.")
        if(message.guild.member(client.user).roles.highest.position <= membro.roles.highest.rawPosition) return message.reply("O cargo do membro mencionado é maior que o meu, serei incapaz de expulsar.")
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("Eu não possuo a permissão **Expulsar membros**, serei incapaz de expulsar.")

        let motivo = args.slice(1).join(" ")
        if(!motivo) motivo = "O motivo não foi inserido."

        message.guild.members.kick(membro, motivo).then(() => {

            message.reply("O membro foi expulso com sucesso.")

        }).catch(err => {

            message.reply("Ocorreu um erro interno, mil desculpas. Caso esse problema persistir, contate o suporte.")

        })

    }
}