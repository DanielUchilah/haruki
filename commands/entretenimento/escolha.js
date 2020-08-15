const Discord = require('discord.js')

module.exports = {
    nome: "escolha",
    alternativas: ["escolha", "choose"],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply("Você não inseriu a primeira alternativa de sua escolha...")
        if(!args[1]) return message.reply("Você não inseriu a segunda alternativa de sua escolha...")

        let array = []

        array.push({ pergunta: args[0] })
        array.push({ pergunta: args[1] })

        message.reply(`Não sei por você, mas eu escolheria ${array[Math.floor(Math.random() * array.length)].pergunta}`)

    }
}