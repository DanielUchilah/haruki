const Discord = require('discord.js')

module.exports = {
    nome: "ban",
    alternativas: ["banir", "ban"],
    run: async(client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão para utilizar este tipo de comando, bobo(a). A permissão necessária é **Banir membros.**")

        const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!membro) return message.reply("Você não inseriu um membro válido.")
        
        if(membro.id === message.author.id) return message.reply("Você não pode se banir bobinho(a). :pensive:")

        if(message.member.roles.highest.rawPosition <= membro.roles.highest.rawPosition) return message.reply("Você possui um cargo inferior ou igual ao usuário mencionado, serei incapaz de banir.")
        if(message.guild.member(client.user).roles.highest.position <= membro.roles.highest.rawPosition) return message.reply("O cargo do membro mencionado é maior que o meu, serei incapaz de banir.")
        if(!membro.bannable) return message.reply("Eu não possuo a permissão **Banir membros**, serei incapaz de banir.")

        let motivo = args.slice(1).join(" ")
        if(!motivo) motivo = "O motivo não foi inserido."

        message.guild.members.ban(membro, motivo).then(() => {

            message.reply("O membro foi banido com sucesso.")

        }).catch(err => {

            message.reply("Ocorreu um erro interno, mil desculpas. Caso esse problema persistir, contate o suporte.")

        })

    }
}