const Discord = require('discord.js')
const resim = ['https://downloadwap.com/thumbs3/screensavers/d/new/animals/dog_chasing_cat-34184.gif'

]


exports.run = function(client, message, args) {

message.channel.send(

  new Discord.MessageEmbed()

  .setColor("WHITE")

  .setTitle("Kediler İsyanda :D")

  .setImage(resim[Math.floor(Math.random() * resim.length)])
  .setFooter(message.guild.name, client.user.avatarURL())
  .setTimestamp()

  )

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'pisi',

  description: 'Random Atamızın Resmini Paylaşır.',

  usage: 'pisi'

}