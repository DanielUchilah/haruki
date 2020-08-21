const Discord = require('discord.js')

module.exports = {
    nome: "ajuda",
    alternativas: ["help", "ajuda"],
    run: async(client, message, args) => {

        var embed = {
            title: "<a:engrenagem:745757337574178867> ⋅ Ajuda.",
            description: `<a:dancinha:744329305516933201> **Entretenimento (11)**\n8ball | abraçar | alimentar | beijar | cafuné | cocegas | coinflip | cutucar | escolha | idiota\n\n<:equipe:745059485139075203> **Gerenciamento (3)**\nentrada | saida | setprefix\n\n💁 **Moderação (10)**\naddemoji | ban | deleteemoji | desbloquear | fechar | kick | limpar | nsfw | renameemoji | silenciar\n\n🙇 **Utilidade (9)**\navatar | contar | convite | emoji | falar | lembrete | servericon | serverinfo | userinfo`,
            color: "AQUA"
        }
        message.reply({ embed: embed })

    }
}