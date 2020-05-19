const CalculatorCMD = require('./Features/calculator');

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

  if (msg.author.bot) {
    return;
  }

  if (args == null || args.length < 1) {
    return;
  }

  if (args.length == 1) {
    showHelp();
  }

  switch (args[1]) {
    case "", "h" ,"help":
      showHelp();
      return;
    case "what's": case "whats": case 'calc':
      new CalculatorCMD(msg, args.slice(2)).execute();
      return;
    default:
      msg.channel.send('Type help command to see the list of available commands');
      return;
  }
});

function showHelp() {
  msg.channel.send("Hello sir! Here's what i can do! \n",
                    "   ,h,help                 Show the help menu. \n",
                    "   what's,whats,calc       Calculates an operation chain.");
}

function parseCommand(msg) {
  var args = msg.content.split(' ');
  if (args[0].toLowerCase() !== 'yobig') {
    return;
  }

  return args;
}