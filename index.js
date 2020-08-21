const { Client, Collection } = require('discord.js')
const { config } = require('dotenv')
const client = new Client()
const firebase = require('firebase')
const { readdirSync } = require('fs')

var firebaseConfig = {
    apiKey: process.env.ApiKey,
    authDomain: process.env.AuthDomain,
    databaseURL: "https://haruki-database.firebaseio.com",
    projectId: process.env.ProjectId,
    storageBucket: process.env.StorageBucket,
    messagingSenderId: process.env.MessagingSenderId,
    appId: process.env.AppId,
    measurementId: process.env.MeasurementId
};
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

client.comandos = new Collection()
client.alternativas = new Collection()

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./script/${handler}`)(client);
});

const evtFiles = readdirSync('./events/')
console.log(`Foram carregados ${evtFiles.length} eventos.`)

evtFiles.forEach(x => {

  const nome = x.split('.')[0]
  const evento = require(`./events/${x}`)

  client.on(nome, evento.bind(null, client))

})

client.on('message', async (message) => {

    if (message.author.bot) return;
    if (!message.guild) { 
    
        client.channels.cache.get("746455694609219665").send(`Hm, o usuário ${message.author.username}/${message.author.id} me enviou a mensagem ${message.content}`) 
        return;

    }

    let prefix = ""
    const snap = await database.ref(`Servidores/Prefix/${message.guild.id}`).once('value')
    if(snap.val() === null) {
        
        prefix = "h/" 

    } else {

        prefix = snap.val().prefixo

    }

    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const owner = process.env.OWNER
    
    if (cmd.length === 0) return;

    let comando = client.comandos.get(cmd);
    if (!comando) comando = client.comandos.get(client.alternativas.get(cmd));

    if (comando) comando.run(client, message, args, owner, database);

})

client.login(process.env.TOKEN)