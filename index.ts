require('dotenv').config();
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
import handleCommand from './helpers/command';
import handleSelectMenu from './helpers/select-menu';
import { Interaction, Message } from 'discord.js';
import handleMessage from './helpers/message';

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(files => files.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Je suis prêt');
});

client.on('messageCreate', async (message: Message) => {
    if(message.content.includes('/')) return;

    if (message && message.author && message.author.id !== client.user.id) {
        try {
            handleMessage(client, message);
        } catch (e) {
            console.error(e);
        }
    }
});

client.on('interactionCreate', async (interaction: Interaction) => {    
    if (interaction.isCommand()) handleCommand(client, interaction);

    if (interaction.isSelectMenu()) handleSelectMenu(interaction);
});

client.login(process.env.TOKEN);