const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.guild.members.cache.get("338097687922606081").setNickname("Golden Moon")
  message.channel.send("Yaraaaa")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 0
};

exports.help = {
  name: 'altınay',
  description: 'adem',
  usage: 'altınay'
};