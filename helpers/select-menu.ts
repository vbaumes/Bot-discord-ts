const handleSelectMenu = async interaction => {
    switch(interaction.customId) {
        case 'select-language':
            await interaction.update({ content: `Tu as choisis ${interaction.values[0]}`, components: []});
            break;
        default:
            break;
    }
}

export default handleSelectMenu;