const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var prefix = ayarlar.prefix;
const get = require("get-json");
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

client.on("ready",()=>{
  console.log(`Gecelos BOT Aktif!`)

  setInterval(function(){
      get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCjlez3vANipcYbRiU0t0HKQ&key=AIzaSyAFv52r9yKxUhicZd0sR6MMoW4m9yB4eac', function(error, response){
          var s = response.items[0].statistics;
          client.user.setActivity(`Gecelos Kanalı ${s.subscriberCount} Abone`);
      });
  },60000);
});

class om{
    constructor(öm){
        this.öm = öm;
    }

    y(m){
        this.öm = m;
    }

    em(){
        return this.öm;
    }
}

var ms1 = new om(1);

setInterval(function(){
    get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCjlez3vANipcYbRiU0t0HKQ&key=AIzaSyAFv52r9yKxUhicZd0sR6MMoW4m9yB4eac', function(error, response){
            var as = response.items[0].statistics.subscriberCount;
            if(as != parseInt(ms1.em())){
                client.channels.cache.get("761514149255184385").send("**Gecelos Youtube Kanalı** `"+as+"`aboneye ulaştı!");
                ms1.y(as);
            };
        });
},60000);

client.lang = new Map();

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);

client.login(process.env.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on('message', message =>{
const sa = message.content.toLowerCase()

if(sa === 'sa' || sa === 's.a' || sa === 'sea' || sa === 'selam aleyküm' || sa === 'Selam Aleyküm' || sa === 'Selamın Aleyküm'|| sa === 'selamın aleyküm' ) {
message.channel.send(`Aleyküm Selam Hoş Geldin <@${message.author.id}>`)
}
})


client.on("guildMemberRemove", async member => {
    //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
    //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
    
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
    if (!canvaskanal) return;
  
  
    var randomMsg = ["Sunucudan Ayrıldı."];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(640, 360);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "http://upload.furkansalihkaya.com/gulegule.png"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#070706";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = `#f4c237`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 300, 342);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "ro-BOT-güle-güle.png"
    );
  
      canvaskanal.send(attachment);
      canvaskanal.send(
        msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
      );
      canvaskanal.send("İlmek ilmek işlenmiş gibisin, hasretinle, yüreğime, nereye böyle **"+ member.guild.memberCount+"** kişi kaldık.")
    
  });
  
  client.on("guildMemberAdd", async member => {
    //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
    //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
    
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
    if (!canvaskanal) return;
  
  
    var randomMsg = ["Sunucuya Katıldı."];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(640, 360);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "http://upload.furkansalihkaya.com/hosgeldin.png"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#070706";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = `#f4c237`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 300, 342);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "ro-BOT-güle-güle.png"
    );
  
      canvaskanal.send(attachment);
      canvaskanal.send(
        msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
      );
      canvaskanal.send("Sunucuya hoşgeldin, seninle beraber **"+ member.guild.memberCount+"** kişiye ulaştık.")
    
    
    
  });





  
 

client.login(process.env.token);

