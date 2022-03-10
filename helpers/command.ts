/**
* @param {Client} client
* @param {CommandInteraction} interaction
*/
const handleCommand = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName)

    if(!command) return;

    try {
        await command.execute(interaction);
    } catch (e) {
        console.error(e);
        await interaction.reply({content: "Une erreur s'est produite pendant l'exécution de cette commande!", ephemeral: true});
    }
}

export {handleCommand};