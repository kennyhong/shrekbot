require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');

fs.readdir('./events/', (error, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, arg => eventHandler(client, arg));
    })
});

client.login(process.env.BOT_TOKEN);

setInterval(function () {
    client.channels.find(channel => {
        if (channel.id === "476224270318567426"){
            channel.send("I'M AWAKE! I'M AWAKE! (To prevent bot from sleeping)");
        }
    })
}, 20 * 60 * 1000);