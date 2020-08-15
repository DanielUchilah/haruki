const Discord = require('discord.js')

module.exports = {
    nome: "limpar",
    alternativas: ["limpar", "clear"],
    run: async(client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem a permissão necessária para executar esse coamndo, bobo(a). A permissão necessária é **Gerenciar mensagens.**")

        let canal = message.mentions.channels.first()
        if(canal) {

            if(!args[1]) return message.reply("Você não inseriu a quantidade de mensagens que deseja apagar.")
            if(isNaN(args[1])) return message.reply("Você não inseriu um numero válido.")

            if(args[1] > 100) return message.reply("O máximo de mensagens que posso apagar, é 100.")
            if(args[1] < 2) return message.reply("O minimo de mensagens para serem apagadas, é 2.")

            message.guild.channels.cache.get(canal.id).bulkDelete(args[1])
            await message.guild.channels.cache.get(canal.id).send(`${args[1]} mensagens foram deletadas pelo **${message.author.username}**`)
            message.channel.send(`${args[1]} mensagens foram apagadas com sucesso.`)

        } else {

            if(!args[0]) return message.reply("Você não inseriu a quantidade de mensagens que deseja apagar.")
            if(isNaN(args[0])) return message.reply("Você não inseriu um numero válido.")

            if(args[0] > 100) return message.reply("O máximo de mensagens que posso apagar, é 100.")
            if(args[0] < 2) return message.reply("O minimo de mensagens para serem apagadas, é 2.")

            message.channel.bulkDelete(args[0])
            await message.reply(`${args[0]} mensagens foram deletadas pelo **${message.author.username}**`)

        }


    }
}