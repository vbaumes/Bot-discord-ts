const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
import * as commandModules from "./commands";

type Command={
    data: unknown
}

export const commands = [];
// const commandPath = path.join(__dirname, '/commands');
// const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

for(const module of Object.values<Command>(commandModules)) {
    commands.push(module.data);
}
//for (const file of commandFiles) {
    //const command = require(`./commands/${file}`);
    //console.log(command);
    //console.log(command.data);
    //console.log(command.data.toJSON());
    // commands.push(command.data.toJSON());
//}

const rest = new REST({version: '9'}).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
        console.log('Les commandes ont été enregistrées!');
    } catch(e) {
        console.error(e);
    }
})();