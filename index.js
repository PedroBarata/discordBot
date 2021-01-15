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

  if (cmd === `${prefix}vemTranquilo`) {
    message.channel.send(
      "( •_•) \n ( ง )ง \n /︶\\ vem tranquilo, vem tranquilo..."
    );
    message.channel.send(
      "( •_•) \n ( ง )ง \n /︶\\ vem afobado não... vem tranquilo"
    );
    message.channel.send("( •_•) \n ( ง )ง \n /︶\\ eu e tu...eu e tu ");
    return;
  }
  if (cmd === `${prefix}vemProFut`) {
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
  if (cmd === `${prefix}sushi`) {
    return message.channel.send(":sushi:");
  }
  if (cmd === `${prefix}thaiga`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/604098334847926282/unknown.png")
  }

  if (cmd === `${prefix}poppeiro`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/615033907708166144/unknown.png")
  }

  if (cmd === `${prefix}choroDeRe`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/615711631376384031/unknown.png")
  }

  if (cmd === `${prefix}padeiro2`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/685676589681606805/unknown.png")
  }
  if (cmd === `${prefix}paulao2`) {
    return message.channel.send("https://media.discordapp.net/attachments/257651525453611009/685955532258803787/unknown.png")
  }
  if (cmd === `${prefix}paulao3`) {
    return message.channel.send("Mas eu sou XERIFE :cowboy: :star:")
  }
  if (cmd === `${prefix}paulao4`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/731961668699029524/unknown.png")
  }
  if (cmd === `${prefix}barata`) {
    return message.channel.send("https://media.discordapp.net/attachments/257651525453611009/711011326209818645/unknown.png")
  }
  if (cmd === `${prefix}bosca`) {
    return message.channel.send("https://media.discordapp.net/attachments/257651525453611009/738590924023791637/unknown.png")
  }
  if (cmd === `:heart:`) {
    return message.channel.send(":heart:")
  }
  if (cmd === `${prefix}alpinista`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/767149747848478750/unknown.png")
  }
  if (cmd === `${prefix}alpinista2`) {
    return message.channel.send("https://cdn.discordapp.com/attachments/257651525453611009/767159522434875412/unknown.png")
  }
  if (cmd === `${prefix}temCarburador`) {
    return message.channel.send("https://media.discordapp.net/attachments/257651525453611009/774046691887415337/unknown.png")
  }
  if (cmd === `${prefix}naoTemCarburador`) {
    return message.channel.send("https://media.discordapp.net/attachments/257651525453611009/774046845076897822/unknown.png")
  }
  if(cmd === `${prefix}lucastere`) {
    message.channel.send(`Lucastere apavorando streamer`);
    message.channel.send("https://clips.twitch.tv/TubularObedientClamPanicVis");
    return;
  }
  
  if (cmd === `${prefix}help`)
    return message.channel.send(`
  ${prefix}vemTranquilo
  ${prefix}vemProFut
  ${prefix}digdon
  ${prefix}paulao
  ${prefix}paulao2
  ${prefix}paulao3
  ${prefix}paulao4
  ${prefix}padeiro
  ${prefix}padeiro2
  ${prefix}lucastere
  ${prefix}barata
  ${prefix}poppeiro
  ${prefix}thaiga
  ${prefix}choroDeRe
  ${prefix}sushi
  ${prefix}bosca
  ${prefix}alpinista
  ${prefix}alpinista2
  ${prefix}temCarburador
  ${prefix}naoTemCarburador
  `);
});

bot.login(process.env.BOT_TOKEN);
