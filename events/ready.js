const Discord = require('discord.js')
const firebase = require('firebase')

module.exports = (client) => {

    client.comandos.forEach(x => {

        firebase.database().ref(`Comandos/${x.nome}`).set({
            comando: x.nome
        })
        console.log(x.nome)

    })
    console.log(`Olá, ${client.user.username} está online.`)

}
