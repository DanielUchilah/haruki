const Discord = require('discord.js')

module.exports = {
    nome: "cargos",
    alternativas: ["cargos", "addrole", "removerole", "createrole", "deleterole"],
    run: async(client, message, args) => {

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send("Então... Eu não possuo permissão de enviar mensagens no servidor, peça para um administrador gerenciar meu cargo.").catch(err => { return });
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("Então... Eu não possuo permissão de gerenciar mensagens no servidor, peça para um administrador gerenciar meu cargo.")
        if(!message.guild.me.hasPermission("USE_EXTERNAL_EMOJIS")) return message.reply("Então... Eu não possuo permissão de enviar emojis externos no servidor, peça para um administrador gerenciar meu cargo.")
        
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Você não tem permissão para utilizar este comando bobo(a). A permissão necessária é **Gerenciar cargos.**")

        var embed = {
            title: "<a:engrenagem:745757337574178867> ⋅ Cargos.",
            fields: [
                {
                    name: ":paperclip: Adicionar cargo.",
                    value: "Utilize **h/cargos adicionar (Membro) (Cargo)** para poder adicionar certo cargo em um usuário. ",
                    inline: false,
                },
                {
                    name: ":balloon: Remover cargo.",
                    value: "Utilize **h/cargos remover (Membro) (Cargo)** para poder remover certo cargo de um usuário.",
                    inline: false,
                },
                {
                    name: "📋 Deletar cargo.",
                    value: "Utilize **h/cargos deletar (Cargo)** para poder apagar um cargo.",
                    inline: false
                },
                {
                    name: "⏰ Criar cargo.",
                    value: "Utilize **h/cargos criar (Cor) (Nome)** para poder criar um cargo.",
                    inline: false
                }
            ],
            color: "AQUA"
        }
        if(!args[0]) return message.reply({ embed: embed })

        

        switch(args[0].toLowerCase()) {

            case "adicionar":

                var membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
                if(!membro) return message.reply("Eu não consegui encontrar o membro que você inseriu...")

                var cargo = message.mentions.roles.first() || message.guild.roles.cache.get(args[2])
                if(!cargo) return message.reply("Eu não consegui encontrar o cargo que você inseriu...")

                if(membro.roles.cache.has(cargo.id)) return message.reply(`O usuário já possue esse cargo, use **h/cargos ${membro} ${cargo}** para remover o cargo do usuário.`)
                if(membro.id === message.author.id) return message.reply("Sinto muito mas por questões de segurança, não irei deixar você adicionar o cargo em si mesmo.")

                if(message.guild.members.cache.get(client.user.id).roles.highest.rawPosition < cargo.rawPosition) return message.reply("Sinto muito mas... O cargo que você inseriu é maior que o meu, serei incapaz de adicionar.")
                if(!membro.roles.highest.rawPosition > cargo.rawPosition) return message.reply("Sinto muito mas por questões de segurança, não irei deixar você adicionar o cargo neste usuário.")

                membro.roles.add(cargo).then(() => {
                    
                    message.reply("Prontin, cargo adicionado.")

                }).catch(err => {

                    message.reply("Ocorreu um erro interno, sinto muito. Caso o problema persistir, chame o suporte.")

                })

            break;
            case "remover":

                var membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
                if(!membro) return message.reply("Eu não consegui encontrar o membro que você inseriu...")

                var cargo = message.mentions.roles.first() || message.guild.roles.cache.get(args[2])
                if(!cargo) return message.reply("Eu não consegui encontrar o cargo que você inseriu...")

                if(!membro.roles.cache.has(cargo.id)) return message.reply(`O usuário não possue esse cargo, use **h/cargos adicionar ${membro} ${cargo}** para adicionar o cargo no usuário.`)
                if(membro.id === message.author.id) return message.reply("Sinto muito mas por questões de segurança, não irei deixar você remover o cargo de si mesmo.")

                if(membro.roles.highest.rawPosition > message.member.roles.highest.rawPosition) return message.reply("Você possue um cargo inferior que o usuário mencionado, serei incapaz de remover.")
                if(message.guild.members.cache.get(client.user.id).roles.highest.rawPosition < cargo.rawPosition) return message.reply("Sinto muito mas... O cargo que você inseriu é maior que o meu, serei incapaz de remover.")
                if(!membro.roles.highest.rawPosition > cargo.rawPosition) return message.reply("Sinto muito mas por questões de segurança, não irei deixar você remover o cargo desse usuário.")

                membro.roles.remove(cargo).then(() => {
                    
                    message.reply("Prontin, cargo removido.")

                }).catch(err => {

                    message.reply("Ocorreu um erro interno, sinto muito. Caso o problema persistir, chame o suporte.")

                })

            break;
            case "criar":

                if(!args[1]) return message.reply("Você não inseriu a cor que deseja. (É necessário que a cor esteja em formato HEX)")
                if(!args.slice(2).join(" ")) return message.reply("Você não inseriu o nome que deseja.")

                message.guild.roles.create({data: { name: args.slice(2).join(" "), color: args[1] }}).then(() => {
                    message.reply("Prontin, cargo criado.")
                }).catch(err => {

                    message.reply("Ocorreu um erro interno, sinto muito. Caso o problema persistir, chame o suporte.")

                })

            break;
            case "deletar":

                var cargo = message.guild.roles.cache.get(args[1]) || message.mentions.roles.first()
                if(!cargo) return message.reply("Você não inseriu o cargo que deseja deletar.")

                if(message.member.roles.highest.rawPosition < cargo.rawPosition) return message.reply("O seu cargo é inferior ao mencionado, serei incapaz de deletar.")

                message.guild.roles.cache.get(cargo.id).delete().then(() => {

                    message.reply("Prontin, cargo deletado.")
                    
                }).catch(err => {

                    message.reply("Ocorreu um erro interno, sinto muito. Caso o problema pesistir, chame o suporte.")

                })


            break;
            default: 

            var embed = {
                title: "<a:engrenagem:745757337574178867> ⋅ Cargos.",
                fields: [
                    {
                        name: ":paperclip: Adicionar cargo.",
                        value: "Utilize **h/cargos adicionar (Membro) (Cargo)** para poder adicionar certo cargo em um usuário. ",
                        inline: false,
                    },
                    {
                        name: ":balloon: Remover cargo.",
                        value: "Utilize **h/cargos remover (Membro) (Cargo)** para poder remover certo cargo de um usuário.",
                        inline: false,
                    },
                    {
                        name: "📋 Deletar cargo.",
                        value: "Utilize **h/cargos deletar (Cargo)** para poder apagar um cargo.",
                        inline: false
                    },
                    {
                        name: "⏰ Criar cargo.",
                        value: "Utilize **h/cargos criar (Cor) (Nome)** para poder criar um cargo.",
                        inline: false
                    }
                ],
                color: "AQUA"
            }
            message.reply({ embed: embed })

            break;

        }


    }
}