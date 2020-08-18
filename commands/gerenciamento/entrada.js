const Discord = require('discord.js')

module.exports = {
    nome: "entrada",
    alternativas: ["entrada", "join"],
    run: async (client, message, args, owner, database) => {

        let membro = message.author

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
                if(!argumento) return message.reply("Você não inseriu a mensagem que deseja de boas vindas.")

                let placeholder1 = argumento.replace(/{user}/g, membro)
                let placeholder2 = placeholder1.replace(/{user.name}/g, membro.username)
                let placeholder3 = placeholder2.replace(/{membros}/g, message.guild.memberCount)

                await message.reply(placeholder3)

            break;

        }

    }
}