const SlashCommandBuilder = require('@discordjs/builders');
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Renvoie le nombre de ping');
    
/**
* @param {CommandInteraction} interaction
*/
export async function execute(interaction: CommandInteraction) {
    await interaction.reply('Pong');

    const message: any = await interaction.fetchReply();

    return interaction.editReply(`Le message a mis ${message.createdTimestamp - interaction.createdTimestamp}ms pour me parvenir et te revenir. \nTon ping est est de ${interaction.client.ws.ping}ms`);
};