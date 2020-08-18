const Discord = require('discord.js')

module.exports = (client, guild) => {

    let canal = client.channels.cache.get("744692043904843806")
    canal.send(`Fui adicionado no servidor ${guild.name} que possue o ${guild.owner}/${guild.owner.id} como dono.`)
    
}