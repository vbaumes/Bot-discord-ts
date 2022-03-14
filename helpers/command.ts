import * as commandModules from "../commands";
const commands = Object(commandModules);

/**
* @param {Client} client
* @param {CommandInteraction} interaction
*/
const handleCommand = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName)

    if(!command) return;

    try {
        //await command.execute(interaction);
        await commands[command].execute(interaction, client)
    } catch (e) {
        console.error(e);
        await interaction.reply({content: "Une erreur s'est produite pendant l'exécution de cette commande!", ephemeral: true});
    }
}

export default handleCommand;