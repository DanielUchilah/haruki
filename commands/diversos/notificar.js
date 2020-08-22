const Discord = require('ms')

module.exports = {
    nome: "notificar",
    alternativas: ["notificar"],
    run: async(client, message, args) => {

        if(!message.guild.id === "743973499365883910") return message.reply("Você precisa estar em meu servidor de suporte para poder executar este comando.")

        var embed = {
            title: "<a:engrenagem:745757337574178867> ⋅ Notificações.",
            description: "Clique nas reações que deseja ser notificado.",
            fields: [
                {
                    name: "<:equipe:745059485139075203> Parcerias",
                    value: "Reaja com o emoji a cima para ser notificado sobre parcerias ^^"
                },
                {
                    name: "<a:discord:745757028324081815> Haruki",
                    value: "Reaja com o emoji a cima para receber notificação sobre tudo no bot ^^"
                },
                {
                    name: "<a:money:712394003525402684> Sorteio",
                    value: "Reaja com o emoji a cima para receber notificação sobre sorteios ^^"
                }
            ],
            color: "AQUA"
        }
        var msg = await message.reply({ embed: embed })

        await msg.react("745059485139075203")
        await msg.react("745757028324081815")
        await msg.react("712394003525402684")

        var filtro = (r, u) => r.me && u.equals(message.author)
        collector = msg.createReactionCollector(filtro, { max: 3 })

        collector.on('collect', async (r) => {

            switch(r.emoji.id) {

                case "745059485139075203":

                    message.member.roles.add("746850513282269276")
                    message.reply("Prontinho, irei te avisar a partir de agora. (Parcerias)")

                break;
                case "745757028324081815":

                    message.member.roles.add("746850675140460676")
                    message.reply("Prontinho, irei te avisar a partir de agora. (Haruki)")

                break;
                case "712394003525402684":

                    message.member.roles.add("746850603614863472")
                    message.reply("Prontinho, irei te avisar a partir de agora. (Sorteios)")
                
                break;

            }

        })

    }
}