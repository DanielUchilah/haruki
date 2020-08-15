const Discord = require('discord.js')

module.exports = {
    nome: "falar",
    alternativas: ["falar", "say"],
    run: async(client, message, args) => {

        let argumento = args.slice(0).join(" ")
        if(message.member.hasPermission("MANAGE_MESSAGES")) {

            let canal = message.mentions.channels.first()
            if(!canal) {

                if(!argumento) return message.reply("Você não inseriu o que deseja que eu diga.")

                message.channel.send(argumento)
            
            } else {

                if(!args.slice(1).join(" ")) return message.reply("Você não inseriu o que deseja que eu diga.")
                message.guild.channels.cache.get(canal.id).send(args.slice(1).join(" "))
                message.reply("Mensagem enviada com sucesso.")

            }

        } else {

            if(!argumento) return message.reply("Você não inseriu o que deseja que eu diga.")

            message.channel.send(`${message.author.username} me obrigou a falar... ${argumento}`)
            
        }


    }
}