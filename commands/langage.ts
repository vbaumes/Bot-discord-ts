const SlashCommandBuilder = require('@discordjs/builders');
import { CommandInteraction, MessageActionRow, MessageSelectMenu } from 'discord.js';

export const data = new SlashCommandBuilder()
        .setName('langage')
        .setDescription('Choisit ton langage de prédilection');

    /**
    * @param {CommandInteraction} interaction
    */
export async function execute(interaction: CommandInteraction) {
    const row = new MessageActionRow()
        .addComponents(new MessageSelectMenu()
            .setCustomId('select-language')
            .setPlaceholder('Sélectionne ton langage favoris')
            .addOptions([
                {
                    label: 'C#',
                    description: 'Développeur .NET',
                    value: 'CSHARP'
                }, 
                {
                    label: 'JavaScript',
                    description: 'Développeur WEB',
                    value: 'JavaScript'
                }
            ])
        );

    return interaction.reply({ content: 'Quel est ton langage de programmation favoris ?', components: [row] })
}
