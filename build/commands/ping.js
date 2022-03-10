"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Renvoie le nombre de ping'),
    /**
    * @param {CommandInteraction} interaction
    */
    async execute(interaction) {
        await interaction.reply('Pong');
        const message = await interaction.fetchReply();
        return interaction.editReply(`Le message a mis ${message.createdTimestamp - interaction.createdTimestamp}ms pour me parvenir et te revenir. \nTon ping est est de ${interaction.client.ws.ping}ms`);
    }
};
//# sourceMappingURL=ping.js.map