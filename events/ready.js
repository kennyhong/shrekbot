module.exports = client => { 
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
}