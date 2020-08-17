const Discord = require('discord.js')

module.exports = {
    nome: "contar",
    alternativas: ["contar"],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply("Você não inseriu a frase que deseja saber os caracteres.")
        
        let texto = args.slice(0).join(" ")

        var embed = {
            title: "📎 ⋅ Contando.",
            description: `**Texto**\`\`\`${texto}\`\`\`**Quantidade de caracteres**\`\`\`${texto.length}\`\`\``,
            color: "AQUA"
        }
        message.reply({ embed: embed }).catch(err => {

            message.author.send("Oi, então eu não consegui enviar o texto... Talvez tiraram minhas permissões de enviar mensagens, ou o seu texto ficou ENORME ;-;").catch(err => { return });

        })

    }
}