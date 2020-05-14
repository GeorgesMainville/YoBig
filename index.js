require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

// bot.on('message', msg => {

//   if (msg.content === 'YoBig whats 9+10?)
// });

bot.on('message', msg => {
  var args = msg.content.split();

  if (args[0].toLowerCase() === 'yobig') {
    msg.reply("C'est moi!");
    return;
  }
  if (msg.content === 'YoBig whats 9 + 10') {
    msg.reply('pong');
    msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
