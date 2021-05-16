const CalculatorCMD = require('./Features/calculator');
const AudioPlayerCMD = require('./Features/audio-player');
const TextFormatterService = require('./Services/TextFormatterService');

require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const TOKENDEV = process.env.TOKENDEV;
var isReady = true;

if (process.argv[2] === '-d') {
  bot.login(TOKENDEV);
}
else {
  bot.login(TOKEN);
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

 bot.on('message', async msg => {

  if (!isReady) {
    return;
  }

  let args = parseCommand(msg);

  if (msg.author.bot) {
    return;
  }

  if (args == null || args.length < 1) {
    return;
  }

  if (args.length == 1) {
    showHelp(msg);
    return;
  }

  isReady = false;
  switch (args[1]) {
    case '': case 'h': case 'help':
      showHelp(msg);
      break;
    case "what's": case 'whats': case 'calc':
      new CalculatorCMD(msg, args.slice(2)).execute();
      break;
    case 'tyl': case 'play':
      await new AudioPlayerCMD(msg, args.slice(2)).execute();
      break;
    default:
      msg.channel.send('Type help command to see the list of available commands');
  }
  
  isReady = true;
});

function showHelp(msg) {

  msg.channel.send(TextFormatterService.format('Help',[
    {
      "name": "Commands",
      "value": ['Help','Whats','Tyl'],
      "inline": true
    },
    {
      "name": "Description",
      "value": ['Shows this menu','Calculates a math operation','Plays an audio file'],
      "inline": true
    }
  ], 'This is the list of available commands that the bot can execute'))
}

function parseCommand(msg) {
  var args = msg.content.split(' ');
  if (args[0].toLowerCase() !== 'yobig') {
    return;
  }

  return args;
}