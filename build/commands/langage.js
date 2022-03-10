"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('langage')
        .setDescription('Choist ton langage de prédilection'),
    /**
    * @param {CommandInteraction} interaction
    */
    async execute(interaction) {
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageSelectMenu()
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
        ]));
        return interaction.reply({ content: 'Quel est ton langage de programmation favoris ?', components: [row] });
    }
};
//# sourceMappingURL=langage.js.map