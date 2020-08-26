const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "beijar",
    alternativas: ["kiss", "beijar"],
    run: async(client, message, args, owner) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`KKK? Você não pode se beijar bobo(a).`)

        let { body } = await superagent.get('https://nekos.life/api/kiss');

        var embed = {
            title: `😍 ⋅ ${message.author.username} beijou ${membro.user.username}`,
            color: "AQUA",
            image: {
                url: body.url
            }
        }
        let msg = await message.reply({ embed: embed })

        msg.react("😍")

    }
}