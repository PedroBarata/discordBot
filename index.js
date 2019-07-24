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
    message.channel.send(
      "( •_•) \n ( ง )ง \n /︶\\ vem tranquilo, vem tranquilo..."
    );
    message.channel.send(
      "( •_•) \n ( ง )ง \n /︶\\ vem afobado não... vem tranquilo"
    );
    message.channel.send("( •_•) \n ( ง )ง \n /︶\\ eu e tu...eu e tu ");
    return;
  }
  if (cmd === `${prefix}vemprofut`) {
    message.channel.send(
      `Vem pro fut vem⚽Vem pro fut ⚽#VemProFut ⚽😎O futebol óh⚽tá estralando⚽😎tá pegado ò🤙✌️só tapa👋🤞só tapa de qualidade monstra🦕🐉aí o desafio Thiago Nere🤙🤙⚽é nós👉tamo junto⚽😎sempre🤙✌️lado a lado⚽aí eu tô de seleção⚽a satisfação aqui é total 😎🤙tamo junto⚽Vem`
    );
    return;
  }
  if (cmd === `${prefix}digdon`) {
    return message.channel.send(`Morre de ré :red_car: :boom: `);
  }
  if (cmd === `${prefix}paulao`) {
    return message.channel.send(`Eu chamei, vcs que não vieram :shrug:`);
  }
  if (cmd === `${prefix}padeiro`) {
    message.channel.send(`Aqueeela padeirada!`);
    message.channel.send(`https://www.youtube.com/watch?v=-2tZqyhWG4o`);
    return;
  }
  if (msg.content === "sushi") {
    return message.channel.send(":sushi:");
  }

  if (cmd === `${prefix}dejavu`) {
    const channel = client.channels.get("#radio");
    if (!channel) {
      return console.error("The channel does not exist!");
    }
    channel
      .join()
      .then(connection => {
        message.channel.send(`+play dejavu`);
      })
      .catch(e => {
        console.error(e);
      });
  }
});

bot.login(botconfig.token);
