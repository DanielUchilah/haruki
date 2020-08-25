const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    nome: "silenciar",
    alternativas: ["silenciar", "mute"],
    run: async(client, message, args, owner, database) => {

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send("Então... Eu não possuo permissão de enviar mensagens no servidor, peça para um administrador gerenciar meu cargo.").catch(err => { return });
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("Então... Eu não possuo permissão de gerenciar cargos, peça para um administrador gerenciar meu cargo.")

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não possue permissão de utilizar este comando boba(o). A permissão necessária é **Expulsar membros.**")

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply("Você não inseriu o membro que deseja silenciar.")

        let tempo = args[1]
        if(!tempo) return message.reply("Você não inseriu o tempo que deseja silenciar o usuário. (1s, 1m, 1h, 1d)")

        if(message.member.roles.highest.rawPosition <= membro.roles.highest.rawPosition) return message.reply("Você possui um cargo inferior ou igual ao usuário mencionado, serei incapaz de expulsar.")
        if(message.guild.member(client.user).roles.highest.position <= membro.roles.highest.rawPosition) return message.reply("O cargo do membro mencionado é maior que o meu, serei incapaz de expulsar.")

        let role = message.guild.roles.cache.find(x => x.name === "Silenciado (Haruki)")
        if(!role) {

            database.ref(`Punições/${message.guild.id}/${membro.id}/Mute`).set({
                silenciado: true
            })

            let cargo = await message.guild.roles.create({data: { name: "Silenciado (Haruki)", color: "#42e3f5" }})

            let filtro = message.guild.channels.cache.array()
            filtro.forEach(x => {

                x.updateOverwrite(cargo.id, { "SEND_MESSAGES": false })

            })

            message.reply("O membro foi punido com sucesso.")
            await membro.roles.add(cargo)

            setTimeout(async () => {

                database.ref(`Punições/${message.guild.id}/${membro.id}/Mute`).remove()

                membro.roles.remove(cargo)                
            }, ms(tempo))

        } else {

            database.ref(`Punições/${message.guild.id}/${membro.id}/Mute`).set({
                silenciado: true
            })

            let filtro = await message.guild.channels.cache.array()
            filtro.forEach(x => {
                x.updateOverwrite(role.id, { "SEND_MESSAGES": false })
            })

            await membro.roles.add(role)
            message.reply("O membro foi punido com sucesso.")

            setTimeout(async () => {

                database.ref(`Punições/${message.guild.id}/${membro.id}/Mute`).remove()

                membro.roles.remove(role)                
            }, ms(tempo))

        }

    }
}