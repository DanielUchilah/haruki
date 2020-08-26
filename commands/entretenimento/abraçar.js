const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "abraçar",
    alternativas: ["abraçar", "hug"],
    run: async(client, message, args, owner) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`Você não pode se abraçar bobo(a) :pensive:`)

        let { body } = await superagent.get('https://nekos.life/api/hug');

        var embed = {
            title: `<:abraco:695368827612954715> ⋅ ${message.author.username} abraçou ${membro.user.username}`,
            color: "AQUA",
            image: {
                url: body.url
            }
        }

        let msg = await message.reply({ embed: embed })
        msg.react("695368827612954715")


    }
}