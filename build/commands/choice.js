"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('choice')
        .setDescription('Permet de faire un choix')
        .addStringOption(option => {
        return option.setName('choice')
            .setDescription('Le choix  faire')
            .setRequired(true)
            .addChoice('Choix 1', '1')
            .addChoice('Choix 2', '2')
            .addChoice('Choix 3', '3');
    }),
    /**
    * @param {CommandInteraction} interaction
    */
    async execute(interaction) {
        const choice = interaction.options.getString('choice');
        await interaction.reply(choice);
    }
};
//# sourceMappingURL=choice.js.map