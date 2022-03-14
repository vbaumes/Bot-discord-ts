import { Message } from "discord.js";
import {randomResponses} from '../phrases-config/bot-mentioned';
import randomNumber from '../utils/math';

/**
* @param {Message} message
*/
const botMentioned = async (message: Message) => {
    console.log();
    message.channel.send(
        `${randomResponses[randomNumber(randomResponses.length)]}`
    );
}

export default botMentioned;