const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "cafuné",
    alternativas: ["cafuné", "pat", "carinho"],
    run: async(client, message, args, owner) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`Você não pode fazer carinho em si mesmo bobo(a) :pensive:`)

        let { body } = await superagent.get('https://nekos.life/api/pat');

        var embed = {
            title: `<:pat:743959099733180416> ⋅ ${message.author.username} fez carinho em ${membro.user.username}`,
            color: "AQUA",
            image: {
                url: body.url
            }
        }

        let msg = await message.reply({ embed: embed })
        msg.react("743959099733180416")

    }
}