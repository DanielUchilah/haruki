const Discord = require('discord.js')

module.exports = {
    nome: "coinflip",
    alternativas: ['coinflip', 'moeda'],
    run: async(client, message, args, owner) => {

        let alternativas = ['<:coin:743951413213921310> Cara!', '<:coin:743951413213921310> Coroa!']
    
        message.reply(alternativas[Math.floor(Math.random() * alternativas.length)])

    }
}