const Discord = require('discord.js')

module.exports = (client, membro) => {

    if(!membro.guild.id != "743973499365883910") {

        let canal = client.channels.cache.get("743984665194659851")
    
        canal.send(`<a:dancinha:744329305516933201> **» Um novo membro!**\n\nSeja bem vindo **${membro.user.username}**, me chamo Haruki mas você pode me chamar de Haru!\n\nMe adicione em seu servidor, para que eu possa atingir os 100 servidores o mais rápido possivel. Mas primeiro, visualize todos os comandos em **https://harukibot.online**\n\nAlguma dúvida? Pergunte em <#744677360971808819>`)
        
        membro.roles.add("744675526345490463")    

    }
}