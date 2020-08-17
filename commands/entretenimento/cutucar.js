const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "cutucar",
    alternativas: ["cutucar", "poke"],
    run: async(client, message, args) => {

        const membro = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`Ham? Por que está se cutucando?`)

        let { body } = await superagent.get('https://nekos.life/api/v2/img/poke');

        var embed = {
            title: `<a:002:745024995553575083> ⋅ ${message.author.username} cutucou ${membro.username}`,
            color: "AQUA",
            image: {
                url: body.url
            }
        }
        let msg = await message.reply({ embed: embed })

        msg.react("745024995553575083")

    }
}