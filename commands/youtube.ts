import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageActionRow, MessageButton } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Donne le lien du trailer des animaux fantastiques'),
    /**
    * @param {CommandInteraction} interaction
    */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('YouTube')
                .setStyle('LINK')
                .setURL('https://www.youtube.com/watch?v=VkiwSNPxDg4')
            )

        await interaction.reply({ content: 'Clique sur le bouton ci-dessus pour voir la bande annonce des animaux fantastiques 3!', components: [row]});
    }
};