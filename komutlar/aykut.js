const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
   "Pamuk",
   "Pamık"
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

     var resim = [
      "https://cdn.glitch.com/05ca7611-88a3-4b25-9b99-573ddbdd6fd4%2Fpngwing.com%20(1).png?v=1621683264796"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail(`${görsel}`)
.setTitle("Adem Diyor Ki:")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aykut-elmas"],
  permLevel: 0
};

exports.help = {
  name: "ademdiyorki"
};