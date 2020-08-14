const Discord = require('discord.js')

module.exports = {
    nome: "eval",
    alternativas: ["eval", "cmd"],
    run: async(client, message, args, owner) => {

        if(!message.author.id === owner) return message.reply("Epa, você não tem permissão para executar esse comando.")

        const codigo = args.slice(0).join(" ");
        if(!codigo) return message.reply("Insira o codigo.")

        try {

            var resultado = eval(codigo)

            if(typeof resultado !== "string") resultado = inspect(resultado)
            if(resultado.size > 1950) resultado = resultado.substr(0, 1950)
            
            var embed = {
                title: "<:terminal:743946647570088006> ⋅ Console.",
                description: `**Código** \`\`\`${codigo}\`\`\`\n**Resultado**\`\`\`${resultado}\`\`\``,
                color: "AQUA"
            }
            message.reply({ embed: embed })
        } catch (err) {

            var embed = {
                title: "<:terminal:743946647570088006> ⋅ Console.",
                description: `**Código** \`\`\`${codigo}\`\`\`\n**Resultado**\`\`\`${resultado}\`\`\``,
                color: "AQUA"
            }
            message.reply({ embed: embed })
        }

    }
}