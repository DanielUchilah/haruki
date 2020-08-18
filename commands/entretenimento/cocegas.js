const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "cocegas",
    alternativas: ["cocegas", "tickle"],
    run: async(client, message, args) => {

        const membro = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`Ham? Qual é o motivo da risada?`)

        let { body } = await superagent.get('https://nekos.life/api/v2/img/tickle');

        var embed = {
            title: `<:vergonha:745033505561378936> ⋅ ${message.author.username} fez cocegas em ${membro.username}`,
            color: "AQUA",
            image: {
                url: body.url
            }
        }
        let msg = await message.reply({ embed: embed })

        msg.react("745033505561378936")

    }
}