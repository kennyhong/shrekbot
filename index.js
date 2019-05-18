require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.content === 'swamp') {
        msg.reply('Get out me swamp, DONKAY!');
    }
})

client.on('guildMemberAdd', member => {
    member.send(`Welcome to Sindaria!\n\nMake sure to check out the #welcome channel to get started!\n\nIf you follow or sub Spectissa on Twitch, remember to link your Twitch account to Discord in order to 
    get access to the sub role! https://support.discordapp.com/hc/en-us/articles/212112068-Twitch-Integration-FAQ`)
})

client.login(process.env.BOT_TOKEN);