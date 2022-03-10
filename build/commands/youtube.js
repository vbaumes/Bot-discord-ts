"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Donne le lien du trailer des animaux fantastiques'),
    /**
    * @param {CommandInteraction} interaction
    */
    async execute(interaction) {
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setLabel('YouTube')
            .setStyle('LINK')
            .setURL('https://www.youtube.com/watch?v=VkiwSNPxDg4'));
        await interaction.reply({ content: 'Clique sur le bouton ci-dessus pour voir la bande annonce des animaux fantastiques 3!', components: [row] });
    }
};
//# sourceMappingURL=youtube.js.map