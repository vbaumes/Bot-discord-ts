import { Message } from "discord.js";
import {triggerWords} from '../phrases-config/bot-keywords';
import randomNumber from '../utils/math';

/**
* @param {Message} message
*/
const botKeywords = async (message: Message) => {
    let contentIncludesTriggerWord = false;
    let triggerWord = Object.keys(triggerWords).find(triggerWord => {
        if (message.content.toLowerCase().includes(triggerWord)) {
            contentIncludesTriggerWord = true;
            return triggerWord;
        }
    });

    if (contentIncludesTriggerWord) {
        let responsesArray = triggerWords[triggerWord];
        message.channel.send(
            `${message.author.username}! ${responsesArray[randomNumber(responsesArray.length)]}`
        );
    }
}

export default botKeywords;