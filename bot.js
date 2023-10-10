const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

// Fill the below in
const TOKEN = '---';
const POLL_CHANNEL_ID = '---';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.channel.id === POLL_CHANNEL_ID) {
        if (!message.content.startsWith('/poll')) {
            message.delete()
                .then(() => console.log('Non-poll message deleted'))
                .catch(console.error);
        }
    }
});

client.login(TOKEN);
