const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const handleCommand = require('./helpers/command');
const handleSelectMenu = require('./helpers/select-menu');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS
    ]
});

client.commands = new Collection();

client.once('ready', () => {
    console.log('Je suis prêt');
});

client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) handleCommand(client, interaction);

    if(interaction.isSelectMenu()) handleSelectMenu(interaction);
});

client.login(process.env.TOKEN);