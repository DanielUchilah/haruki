const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    nome: "tapa",
    alternativas: ["tapa", "bater", "slap"],
    run: async(client, message, args, owner) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply(`Eu não consegui encontrar o membro que você inseriu...`)

        if(membro.id === message.author.id) return message.reply(`O que é isso? Não bata em si mesmo moço(a) :pensive:`)

        let { body } = await superagent.get('https://nekos.life/api/v2/img/slap');

        if(client.user.id === membro.id) {

            message.reply("Eiiii, como ousa tentar bater em alguém tão fragil como eu?").then(async msg => {

                msg.react("695369382825820241")

                setTimeout(() => {

                    var embed = {
                        title: `<a:tapa:695369382825820241> ⋅ ${client.user.username} bateu em ${message.author.username}`,
                        color: "AQUA",
                        image: {
                            url: body.url
                        }
                    }
                    
                    msg.edit({ embed: embed })

                }, 3000)

            })

        } else {

            var embed = {
                title: `<a:tapa:695369382825820241> ⋅ ${message.author.username} bateu em ${membro.user.username}`,
                color: "AQUA",
                image: {
                    url: body.url
                }
            }
            let msg = await message.reply({ embed: embed })
            msg.react("695369382825820241")

        }
        

    }
}