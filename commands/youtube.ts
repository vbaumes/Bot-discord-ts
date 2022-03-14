const SlashCommandBuilder = require('@discordjs/builders');
import { CommandInteraction, MessageActionRow, MessageButton } from 'discord.js';

export const data = new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Donne le lien du trailer des animaux fantastiques');

/**
* @param {CommandInteraction} interaction
*/
export async function execute(interaction: CommandInteraction) {
    const row = new MessageActionRow()
        .addComponents(new MessageButton()
            .setLabel('YouTube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=VkiwSNPxDg4')
        )

    return await interaction.reply({ content: 'Clique sur le bouton ci-dessus pour voir la bande annonce des animaux fantastiques 3!', components: [row]});
};