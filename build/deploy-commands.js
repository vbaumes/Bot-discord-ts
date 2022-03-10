"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
exports.commands = [];
const commandFiles = fs.readdirSync('./commands').filter(files => files.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    exports.commands.push(command.data.toJSON());
}
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: exports.commands });
        console.log('Les commandes ont été enregistrées!');
    }
    catch (e) {
        console.error(e);
    }
})();
//# sourceMappingURL=deploy-commands.js.map