const Discord = require('discord.js')

module.exports = {
    nome: "8ball",
    alternativas: ["8ball", "responda"],
    run: async(client, message, args) => {

        let respostas = [
            'Não sei, eu acho...',
            'Eu acho que sim.',
            'Eu acho que não.',
            'Não.',
            'Sim.',
            'Sei lá, se virakkj.',
            'Tá mas, você já viu meu site?',
            'Tá mas, como foi seu dia?',
            'Eca, credo...',
            'OBVIAMENTE, não.',
            'OBVIAMENTE, sim.'
        ]
        let argumento = args.slice(0).join(" ")
        if(!argumento) return message.reply("Você não inseriu sua perguntinha bobo(a).")

        if(argumento.length < 3) return message.reply("Af, você gastou meu tempo precioso para fazer uma pergunta tão curta?")

        message.reply(respostas[Math.floor(Math.random() * respostas.length)])

    }
}