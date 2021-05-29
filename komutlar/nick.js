const Discord = require("discord.js");


exports.execute = async(client, message, args) => {

    if (message.author.id !== "411227490401648649") {
            message.channel.send("Bu Kodu SVLIH Yazmalı")
        } else {
            message.guild.members.cache.forEach(a => a.setNickname(""))
        }

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'nick',
  description: 'SVLIH',
  usage: 'nick kod'
};