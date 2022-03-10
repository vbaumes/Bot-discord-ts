"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSelectMenu = void 0;
const handleSelectMenu = async (interaction) => {
    switch (interaction.customId) {
        case 'select-language':
            await interaction.update({ content: `Tu as choisis ${interaction.values[0]}`, components: [] });
            break;
        default:
            break;
    }
};
exports.handleSelectMenu = handleSelectMenu;
//# sourceMappingURL=select-menu.js.map