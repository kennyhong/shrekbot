module.exports = (client, message, member) => {
    const shrekID = client.user.id;

    const modRole = "437492398193377281"
    const rpRole = "788162499639509003";
    const slurs = ["nigger", "nigga", "niglet", "nignog", "faggot", "fag", "chink", "n*gg"]; // Sorry quick and dirty way to build a dict

    if(message.author.id !== shrekID) {
        for(var i = 0; i < slurs.length; i++) {
            if(message.content.toLowerCase().includes(slurs[i])) {
                var channel = message.channel;
                var author = message.author.id;
                message.delete();
                channel.send(`<@${message.author.id}>`+ " - yeet");
                break;
            }
        }
    }

    if (message.content.toLowerCase().match(/ donkey /g)) {
        message.channel.send(`Huh? WHAT ARE YOU DOING IN MY SWAMP?!`);
    }
    
    if (message.content.toLowerCase() === "!approve") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.send("https://www.pngkey.com/png/full/14-142920_shrek-shrek-with-thumbs-up.png");
            message.delete();
        }
    }

    if (message.content.toLowerCase().startsWith("!yeet")) {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            let messageArray = message.content.split(" ");
            let name = messageArray[1];
            message.channel.send("Are you sure you would like to yeet " + name + "?");
        }
    }

    if (message.content.toLowerCase().match(/ forgive /g)) {
        if(message.author.id !== shrekID) {
            message.channel.send("Oh yeah, you're right, " + `<@${message.author.id}>` + ". I forgive you... For stabbing me in the back!");
        }
    }

    if (message.content.toLowerCase() === "!tea") {
        if(message.author.id !== shrekID) {
            const sip = client.emojis.find(emoji => emoji.name === 'SpecSip');
            message.channel.send(`${sip}`);
        }
    }

    if(message.content.toLowerCase() === "!podcast") {
        if(message.author.id !== shrekID) {
            message.channel.send("Get yer listeners and check out Spec's new podcast! You can listen to it here: <https://bit.ly/2ZHvtuw> or <https://spoti.fi/2MII0tV>");
            message.delete();
        }
    }

    if(message.content.toLowerCase() === "!socials") {
        if(message.author.id !== shrekID) {
            message.channel.send("Stay connected with the elven rogue sheself!:\nInsta : <https://www.instagram.com/spectissa_>\nTwitter: <https://twitter.com/spectissa>\nYoutube: <https://www.youtube.com/spectissa>");
            message.delete();
        }
    }

    if (message.content.toLowerCase().match(/ baka /g)) {
        if(message.author.id !== shrekID) {
            const specbaka = client.emojis.find(emoji => emoji.name === 'SpecBaka');
            message.channel.send(`${specbaka}`);
        }
    }

    if(message.content.toLowerCase().startsWith("!ban")) {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            const member = message.mentions.members.first();

            if(!member) {
              return message.reply("If that was me, you'd be dead.");
            }

            if(!member.bannable) {
                return message.reply('ARE YOU KIDDING ME? WHO ARE YOU TRYING TO BAN?');
            }

            return member
            .ban()
            .then(() => {message.reply(`This is the part where you run away ${member.user}. YEEEEEEET!`); message.delete();})
            .catch(error => message.reply('Sorry, an error occured.'));
        }
    }
    
        if(message.content.toLowerCase().startsWith("!kill")) {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            const member = message.mentions.members.first();

            if(!member) {
              return message.reply("If that was me, you'd be dead.");
            }

            if(!member.bannable) {
                return message.reply('ARE YOU KIDDING ME? WHO ARE YOU TRYING TO BAN?');
            }

            return member
            .ban()
            .then(() => {message.reply(`This is the part where you die ${member.user}. YEEEEEEET!`);})
            .catch(error => message.reply('Sorry, an error occured.'));
        }
    }

    if (message.content.toLowerCase() === "!die") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            const specstab = client.emojis.find(emoji => emoji.name === 'SpecStab');
            message.channel.send(`${specstab} ${specstab} ${specstab} ${specstab} ${specstab}`);
            message.delete();
        }
    }

    if (message.content.toLowerCase().match(/ layers /g)) {
        if(message.author.id !== shrekID) {
            message.channel.send(`Onions have layers. Ogres have layers.`);
        }
    }

    if (message.content.toLowerCase() === "!warning") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.send("Tread these swamps lightly boi...\nhttps://media2.giphy.com/media/3o72Fiu6B2vBEwZnIA/giphy.gif");
            message.delete();
        }
    }

    if (message.content.toLowerCase() === "!redflag") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.send("If that was me, you'd be dead.\nhttps://media2.giphy.com/media/wbSVRrU43Uopy/giphy.gif");
            message.delete();
        }
    }

    if (message.content.toLowerCase() === "!redflagreverse") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.send("My mistake I'm sorry!\nhttps://media2.giphy.com/media/gT2TJu2paz4r9eIVtN/giphy.gif");
            message.delete();
        }
    }

    if (message.content.toLowerCase() === "!purgeshrekbot2k") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.fetchMessages()
            .then(messages => messages.filter(m => m.author.id === shrekID).forEach(message => message.delete()));
        }
    }
    
    if (message.content.toLowerCase() === "!developer") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.send("You can check out how I work here: https://github.com/kennyhong/shrekbot");
        }
    }
    
    if (message.content.toLowerCase() === "!live") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            message.channel.send("@everyone THE PRINCESS IS LIVE! EVERYONE GATHER ROUND! [!comms, !links] https://www.twitch.tv/spectissa");
            message.delete();
        }
    }

    // Dice Functions
    
    if (message.content.toLowerCase() === "!d20mod") {
        if(message.author.id !== shrekID && message.member.roles.has(modRole)) {
            var dice = Math.floor((Math.random() * 20) + 1);
            if (dice === 1) {
                message.channel.send("This is the part where you run away... I have rolled a " + dice + "!");
            } else if (dice === 20) {
                message.channel.send("I rolled a " + dice + ", do you think he's maybe compensating for something?")
            } else if (dice < 20 && dice > 9) {
                message.channel.send("I have rolled a " + dice + ". That'll do, Donkey. That'll do.");
            } else {
                message.channel.send("I have rolled a " + dice + ". Go away.");
            }
            message.delete();
        }
    }

    if (message.content.toLowerCase() === "!d20") {
        var isValid = false
        isValid = message.member.roles.has(modRole) || message.member.roles.has(rpRole);
        if(message.author.id !== shrekID && isValid) {
            var dice = Math.floor((Math.random() * 20) + 1);
            if (dice === 1) {
                message.channel.send("D20: Aww too bad you rolled a " + dice + "!");
            } else if (dice === 20) {
                message.channel.send("D20: CRIT! You rolled a " + dice + "!")
            } else {
                message.channel.send("D20: You have rolled a " + dice + "!");
            }
        }
    }

    if (message.content.toLowerCase() === "!d4") {
        var isValid = false
        isValid = message.member.roles.has(modRole) || message.member.roles.has(rpRole);
        if(message.author.id !== shrekID && isValid) {
            var dice = Math.floor((Math.random() * 4) + 1);
            message.channel.send("D4: You have rolled a " + dice + "!");
        }
    }

    if (message.content.toLowerCase() === "!d6") {
        var isValid = false
        isValid = message.member.roles.has(modRole) || message.member.roles.has(rpRole);
        if(message.author.id !== shrekID && isValid) {
            var dice = Math.floor((Math.random() * 6) + 1);
            message.channel.send("D6: You have rolled a " + dice + "!");
        }
    }

    if (message.content.toLowerCase() === "!d8") {
        var isValid = false
        isValid = message.member.roles.has(modRole) || message.member.roles.has(rpRole);
        if(message.author.id !== shrekID && isValid) {
            var dice = Math.floor((Math.random() * 8) + 1);
            message.channel.send("D8: You have rolled a " + dice + "!");
        }
    }

    if (message.content.toLowerCase() === "!d10") {
        var isValid = false
        isValid = message.member.roles.has(modRole) || message.member.roles.has(rpRole);
        if(message.author.id !== shrekID && isValid) {
            var dice = Math.floor((Math.random() * 10) + 1);
            message.channel.send("D10: You have rolled a " + dice + "!");
        }
    }

    if (message.content.toLowerCase() === "!d100") {
        var isValid = false
        isValid = message.member.roles.has(modRole) || message.member.roles.has(rpRole);
        if(message.author.id !== shrekID && isValid) {
            var dice = Math.floor((Math.random() * 100) + 1);
            message.channel.send("D100: You have rolled a " + dice + "!");
        }
    }
} //end
