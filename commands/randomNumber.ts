const SlashCommandBuilder = require('@discordjs/builders');
import { CommandInteraction } from 'discord.js';
import randomNumber from '../utils/math';

export const data = new SlashCommandBuilder()
        .setName('random')
        .setDescription('Renvoie un numéro aléatoire entre 0 et 100');

/**
* @param {CommandInteraction} interaction
*/
export async function execute(interaction: CommandInteraction) {
        return await interaction.reply(`${randomNumber(101)}`);
};
