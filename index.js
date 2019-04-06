const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
    const prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  if (cmd === `${prefix}vemtranquilo`) {
    message.channel.send("( •_•) \n ( ง )ง \n /︶\\ vem tranquilo, vem tranquilo...");
    message.channel.send('( •_•) \n ( ง )ง \n /︶\\ vem afobado não... vem tranquilo');
    message.channel.send('( •_•) \n ( ง )ง \n /︶\\ eu e tu...eu e tu ');
    return;
  }
})

bot.login(botconfig.token);
