import { Client, Message } from "discord.js";
import botKeywords from "../messages/botKeywords";
import botMentioned from '../messages/botMentioned';

/**
* @param {Client} client
* @param {Message} message
*/
const handleMessage = async (client: Client, message: Message) => {
    if (message.mentions.has(client.user.id)) {
       await botMentioned(message);
    } else {
        await botKeywords(message);
    }
}

export default handleMessage;