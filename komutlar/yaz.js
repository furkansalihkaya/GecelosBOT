const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Kanka Hiçbirşey Belirtmeden Nasıl Yazayim Ben Okadar Zeki Değilim / Lütfen Yazacağım Şeyi Belirtirmisin Pls Kanks');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'uzatmaya gerek yok kanks bota istediğin şeyi yazdırırsın işte böyle birşey iyi kullanmalar.d',
  usage: 'yaz <yazmk istdiğin şey iste knk>'
};