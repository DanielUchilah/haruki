const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    nome: "serverinfo",
    alternativas: ["serverinfo"],
    run: async(client, message, args) => {
       
        var embed = {
            title: "<:info:744724523076681790> ⋅ Informações do servidor.",
            description: `👑 **Dono** ${message.guild.owner}\n🛡️ **ID** ${message.guild.id}\n🙇 **Criado em** ${moment(message.guild.createdAt).format("DD/MM/YYYY HH:mm")}\n\n🌎 **Região** ${message.guild.region}\n📋 **Canais** ${message.guild.channels.cache.size}\n💁 **Membros** ${message.guild.members.cache.size}\n\n💁 **Entrei aqui em** ${moment(message.guild.joinedAt).format("DD/MM/YYYY HH:mm")}\n🛡️ **Level de verificação** ${message.guild.verificationLevel}`,
            color: "AQUA"
        }
        message.reply({ embed: embed })

    }
}