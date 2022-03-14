const SlashCommandBuilder = require('@discordjs/builders');
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder().setName('choice').setDescription('Permet de faire un choix').addStringOption(option => {
        return option.setName('choice')
            .setDescription('Le choix a faire')
            .setRequired(true)
            .addChoice('Choix 1', '1')
            .addChoice('Choix 2', '2')
            .addChoice('Choix 3', '3')
        }
    );

export async function execute(interaction: CommandInteraction) {
        const choice = interaction.options.getString('choice');

        return await interaction.reply(choice);
}
