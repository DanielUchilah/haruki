const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "alimentar",
    alternativas: ["alimentar", "feed"],
    run: async(client, message, args) => {

        const membro = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`Hmmmmm, não irei te deixar se alimentar...`)

        let { body } = await superagent.get('https://nekos.life/api/v2/img/feed');

        var embed = {
            title: `<:cookie:745038535127728301> ⋅ ${message.author.username} está alimetando ${membro.username}`,
            color: "AQUA",
            image: {
                url: body.url
            }
        }
        let msg = await message.reply({ embed: embed })

        msg.react("745038535127728301")


    }
}