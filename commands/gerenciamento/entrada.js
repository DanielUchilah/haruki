const Discord = require('discord.js')

module.exports = {
    nome: "entrada",
    alternativas: ["entrada", "join"],
    run: async (client, message, args, owner, database) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Opa, você não possui as permissões necessárias para executar este comando... A permissão necessária é a **Gerenciar canais.**")
        
        var embed = {
            title: "<:info:744724523076681790> ⋅ Configurações.",
            description: "Olá, tudo bom? Vim te ajudar nas configurações. \n\nEm baixo tem todas as configurações disponiveis neste comando. E atenção, lembre se sempre de ativar o modulo depois de configurar, se não, não irá funcionar.",
            color: "AQUA",
            fields: [
                {
                    name: "📎 ⋅ Canal",
                    value: "Defina o canal que deseja que apareça a mensagem de boas vindas. Eu aceito menção ou ID. **Utilize h/entrada canal (Canal)**",
                    inline: true
                },
                {
                    name: "🎈 ⋅ Mensagem",
                    value: "Defina a mensagem de boas vindas que deseja que apareça no canal definido. (user) para mencionar o usuário, (user.nome) para pegar o nome do usuário e (membros) para pegar a quantidade de membros do servidor. **Utilize h/entrada mensagem (Mensagem)**",
                    inline: true
                },
                {
                    name: "<:equipe:745059485139075203> ⋅ Status",
                    value: "Desative o canal de boas vindas utilizando off/on. **Utilize h/entrada status on/off**",
                    inline: true
                }
            ]
        }
        if (!args[0]) return message.reply({ embed: embed })
        switch (args[0].toLowerCase()) {

            case "mensagem":

                let argumento = args.slice(1).join(" ")
                if(!argumento) return message.channel.send(`<:no:745406631277494323> ⋅ Você não inseriu a mensagem que deseja de boas vindas... Ah, e lembrando, você tem alguns placeholders para colocar na mensagem. Por exemplo {user} menciona o usuário no texto. A baixo irei deixar alguns exemplos desses placeholders.\n\n**{user}**/${message.author} - Menção do usuário.\n**{user.name}**/${message.author.username} - Username do usuário.\n**{membros}**/${message.guild.memberCount} - Membros atual do servidor.`)

                let placeholder1 = argumento.replace(/{user}/g, message.author)
                let placeholder2 = placeholder1.replace(/{user.name}/g, message.author.username)
                let placeholder3 = placeholder2.replace(/{membros}/g, message.guild.memberCount)

                var msg = await message.channel.send(`${placeholder3}\n\n<:yes:745409812212220064> ⋅ A mensagem irá ficar do jeito a cima, deseja confirmar a alteração?\n<:no:745406631277494323> ⋅ Cancelar ação.`)
            
                msg.react("745409812212220064")
                await msg.react("745406631277494323")

                var filtro = (r, u) => r.me && u.equals(message.author)
                collector = msg.createReactionCollector(filtro, { time: 120000, max: 1 })

                collector.on('collect', async (r) => {

                    switch(r.emoji.id) {

                        case "745409812212220064":

                            database.ref(`Servidores/BemVindo/${message.guild.id}`).once('value').then(async function (snap) {

                            if(snap.val() === null) {

                                database.ref(`Servidores/BemVindo/${message.guild.id}`).set({
                                    texto: argumento
                                })
    
                                message.channel.send("<:yes:745409812212220064> ⋅ Acabei de alterar o texto, a mensagem já está funcionando. Ah, mas não se esqueça... Se não funcionar, verifique se o canal e o modulo está ativado.")    
      
                            } else {

                                database.ref(`Servidores/BemVindo/${message.guild.id}`).update({
                                    texto: argumento
                                })
    
                                message.channel.send("<:yes:745409812212220064> ⋅ Acabei de alterar o texto, a mensagem já está funcionando. Ah, mas não se esqueça... Se não funcionar, verifique se o canal e o modulo está ativado.")    

                            }

                        })

                        break;
                        case "745406631277494323":

                            message.channel.send("<:no:745406631277494323> ⋅ Não sei o que aconteceu, mas a ação foi cancelada.")

                        break;
                    }

                })

            break;
            case "canal":

                let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
                if(!canal) return message.channel.send("<:no:745406631277494323> ⋅ Você não inseriu o canal que deseja que apareça as mensagens de boas vindas.")

                database.ref(`Servidores/BemVindo/${message.guild.id}`).once('value').then(async function (snap) {  
                  
                    if(snap.val() === null) {
                        
                        database.ref(`Servidores/BemVindo/${message.guild.id}`).set({
                            texto: 'Está é uma mensagem padrão, ou seja, não definiram a mensagem de boas vindas ainda... Por favor, altere utilizando o comando **h/entrada**',
                            canal: canal.id
                        })
                        message.channel.send("<:yes:745409812212220064> ⋅ O canal foi alterado com sucesso.")

                    } else {

                        database.ref(`Servidores/BemVindo/${message.guild.id}`).update({
                            canal: canal.id
                        })
                        message.channel.send("<:yes:745409812212220064> ⋅ O canal foi alterado com sucesso.")
                        
                    }

                })

            break;
            case "status":

                database.ref(`Servidores/BemVindo/${message.guild.id}`).once('value').then(async function (snap) {

                    if(snap.val() === null) {

                        database.ref(`Servidores/BemVindo/${message.guild.id}`).set({
                            status: 'on',
                            texto: 'Está é uma mensagem padrão, ou seja, não definiram a mensagem de boas vindas ainda... Por favor, altere utilizando o comando **h/entrada**'
                        })
                        message.reply("<:yes:745409812212220064> ⋅ Status alterado, está função já foi habilitada.")

                    } else {

                        switch(snap.val().status) {
                            case 'on':

                                database.ref(`Servidores/BemVindo/${message.guild.id}`).update({
                                    status: 'off',
                                })
                                message.reply("<:yes:745409812212220064> ⋅ Status alterado, está função já foi desabilitada.")
    

                            break;
                            case 'off':

                                database.ref(`Servidores/BemVindo/${message.guild.id}`).update({
                                    status: 'on',
                                })
                                message.reply("<:yes:745409812212220064> ⋅ Status alterado, está função já foi habilitada.")    

                            break;
                            default:

                                database.ref(`Servidores/BemVindo/${message.guild.id}`).update({
                                    status: 'on'
                                })
                                message.reply("<:yes:745409812212220064> ⋅ Status alterado, está função já foi habilitada.")

                            break;

                        }

                    }

                })

            break;
            default:

                var embed = {
                    title: "<:info:744724523076681790> ⋅ Configurações.",
                    description: "Olá, tudo bom? Vim te ajudar nas configurações. \n\nEm baixo tem todas as configurações disponiveis neste comando. E atenção, lembre se sempre de ativar o modulo depois de configurar, se não, não irá funcionar.",
                    color: "AQUA",
                    fields: [
                        {
                            name: "📎 ⋅ Canal",
                            value: "Defina o canal que deseja que apareça a mensagem de boas vindas. Eu aceito menção ou ID. **Utilize h/entrada canal (Canal)**",
                            inline: true
                        },
                        {
                            name: "🎈 ⋅ Mensagem",
                            value: "Defina a mensagem de boas vindas que deseja que apareça no canal definido. (user) para mencionar o usuário, (user.nome) para pegar o nome do usuário e (membros) para pegar a quantidade de membros do servidor. **Utilize h/entrada mensagem (Mensagem)**",
                            inline: true
                        },
                        {
                            name: "<:equipe:745059485139075203> ⋅ Status",
                            value: "Desative o canal de boas vindas utilizando off/on. **Utilize h/entrada status on/off**",
                            inline: true
                        }
                    ]
                }
                message.reply({ embed: embed })    

            break;

        }

    }
}