"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = void 0;
/**
* @param {Client} client
* @param {CommandInteraction} interaction
*/
const handleCommand = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.execute(interaction);
    }
    catch (e) {
        console.error(e);
        await interaction.reply({ content: "Une erreur s'est produite pendant l'exécution de cette commande!", ephemeral: true });
    }
};
exports.handleCommand = handleCommand;
//# sourceMappingURL=command.js.map