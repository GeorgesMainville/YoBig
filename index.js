require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  console.info('9+10');

});

bot.on('message', msg => {
  let args = parseCommand(msg);
  
  if (msg.author.bot) {
    return;
  }

  if (args == null || args.length < 1) {
    return;
  }

  if (args.length == 1) {
    msg.channel.send('YoBig'); // TODO Become a function;
  }

  switch(args[1]) {
    case 'salutation':
      msg.reply('salut!');
  }

});

function parseCommand(msg) {
    var args = msg.content.split(' ');
      if (args[0].toLowerCase() !== 'yobig') {
        return;
      }

    return args;
}