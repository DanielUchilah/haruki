const Discord = require('discord.js')
const firebase = require('firebase')

module.exports = async (client, membro) => {

    let database = firebase.database()

    database.ref(`Servidores/BemVindo/${membro.guild.id}`).once('value').then(async function (snap) {

        if(snap.val() === null) {

            return;

        } else {

            if(snap.val().status == 'on') {

                let texto = snap.val().texto
    
                let fakeplace1 = texto.replace(/{user}/g, membro)
                let fakeplace2 = fakeplace1.replace(/{user.name}/g, membro.user.username)
                let fakeplace3 = fakeplace2.replace(/{membros}/g, membro.guild.memberCount)
        
                let canal = membro.guild.channels.cache.get(snap.val().canal)   
                if(!canal) return;

                canal.send(fakeplace3)

            } else {

                return;
                
            }

        }


    })
}