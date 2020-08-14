const { Client, Collection } = require('discord.js')
const { config } = require('dotenv')
const client = new Client()

client.comandos = new Collection()
client.alternativas = new Collection()

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./script/${handler}`)(client);
});

client.on('ready', () => {

    console.log(`Olá, ${client.user.username} está online.`)

})

client.on('message', async (message) => {

    const prefix = "h/";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const owner = process.env.OWNER
    
    if (cmd.length === 0) return;

    let comando = client.comandos.get(cmd);
    if (!comando) comando = client.comandos.get(client.alternativas.get(cmd));

    if (comando) comando.run(client, message, args, owner);

})

client.login(process.env.TOKEN)