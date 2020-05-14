require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  let args = parseCommand(msg);
  
  if (args == null || args.length < 1) {
    console.info(args + ' under 1 element');
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
        console.info(args);
        console.info('lowercase daddy');
        return;
      }

      console.info(args + 'these are the args');

    return args;
}