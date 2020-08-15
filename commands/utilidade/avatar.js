const Discord = require('discord.js')

module.exports = {
    nome: "avatar",
    alternativas: ["avatar", "foto"],
    run: async(client, message, args) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author);

        var embed = {
            title: `🖼️ ⋅ Avatar de ${membro.user.username}`,
            description: `[Clique aqui](${membro.user.displayAvatarURL({ dynamic: true, size: 4096 })}) para baixar o avatar do usuário.`,
            image: {
                url: membro.user.displayAvatarURL({ dynamic: true, size: 4096 })
            },
            color: "AQUA"
        }
        message.reply({ embed: embed })

    }
}