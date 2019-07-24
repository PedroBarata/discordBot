const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const ytdl = require("ytdl-core");

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
  if (cmd === `${prefix}sushi`) {
    return message.channel.send(":sushi:");
  }

  if (cmd === `${prefix}dejavu`) {
    //const channel = bot.channels.get("259754035995738112");

    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          play(connection);
          return;
        })
        .catch(console.error);
    }
    if (cmd === `${prefix}vaza`) {
      //const channel = bot.channels.get("259754035995738112");

      if (message.member.voiceChannel) {
        message.channel.send(":frowning:");
        message.member.voiceChannel.leave();
      }
    }
    if (
      message.content.startsWith(
        `${prefix}skip` || message.content.startsWith(`${prefix}stop`)
      )
    ) {
      skip(message, connection);
      return;
    }
  }
});

function skip(message, connection) {
  if (!message.member.voiceChannel) {
    return message.channel.send("Não to com vcs carai! :angry:");
  }
  connection.dispatcher.end();
}

function play(connection) {
  const dispatcher = connection.playStream(
    ytdl("https://www.youtube.com/watch?v=dv13gl0a-FA", {
      filter: "audioonly",
      volume: 0.5
    })
  );

  dispatcher.on("error", error => {
    console.error(error);
  });

  dispatcher.on("end", () => {
    setTimeout(() => {
      console.error("end!");
      connection.disconnect();
    }, 1000);
  });
}

bot.login(botconfig.token);
