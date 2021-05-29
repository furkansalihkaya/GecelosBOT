const Discord = require('discord.js')
const get = require("get-json");

exports.run = (bot, message, args) => {

        get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCjlez3vANipcYbRiU0t0HKQ&key=AIzaSyAFv52r9yKxUhicZd0sR6MMoW4m9yB4eac', function(error, response){
            var s = response.items[0].statistics;
            message.channel.send(new Discord.MessageEmbed().setColor("#F4C237").setFooter(`Her 10 Abonede Güncellenir`).setTitle(`Gecelos Youtube Kanalı - İstatistik`).addField("Toplam izlenme",s.viewCount,true).addField("Abone sayısı",s.subscriberCount,true).addField("Video sayısı",s.videoCount,true).setThumbnail("https://upload.furkansalihkaya.com/GecelosBOT.png"));
        });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    kategori: 'gecelos'
}

exports.help = {
    name: 'youtube'
}