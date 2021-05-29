const Discord = require('discord.js');

const db = require('quick.db')

exports.run = async (client, message,args) => {

                const ss = new Discord.MessageEmbed()  
    .setColor('A62019')
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Bu komut için "Kullanıcıları Yasakla" Yetkin Olmalı !`)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(ss)
    
   message.delete();
   let soru = args.join(' ');
   let user = message.author.username
   if (!soru) return message.channel.send(
     new Discord.MessageEmbed()
     .setColor('')
     .setDescription(`**Oylamaya Sunmam İçin Bir Şeyler Yazmalısın. !**`)).then(m => m.delete({ timeout:5000 }));
     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor("A62019")
       .setAuthor(message.author.username,message.author.displayAvatarURL())
       .setThumbnail(message.guild.iconURL())
       .setTimestamp()
       .setFooter('Oylama', client.user.displayAvatarURL())
       .setDescription(`__Oylama Konusu__:\n**${soru}**\n`)).then(function(message) {
         message.react('✅');
         message.react('❎');
       });
     }

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["oylama-başlat"], 
  permLevel: 0 
};

exports.help = {
  name: 'oylama'
};