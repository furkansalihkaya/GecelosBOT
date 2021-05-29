const Discord = require('discord.js')
const fs = require("fs");
const resim = ['https://upload.furkansalihkaya.com/pamik.mp4'

]

exports.run = async (client, message, args) => { 
    
        const voicechannel = message.member.voice.channel;
        if (!voicechannel) return message.channel.send(new Discord.MessageEmbed().setColor('#00fff8').setDescription(`${message.author} öncelikle sesli bir kanala girmen gerekiyor.`))
            
        if (!fs.existsSync(`./ardademr-411227490401648649.pcm`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00fff8').setDescription(`${message.author} sana ait herhangi bir ses bulunamamakta.`))
        const connection = await message.member.voice.channel.join();
          message.guild.members.cache.get("447015501319897088").setNickname("Pambık Ören")
          message.channel.send("https://cdn.discordapp.com/attachments/843273217795948545/845778080266321960/lqig3b.mp4")
        const stream = fs.createReadStream(`./ardademr-411227490401648649.pcm`);

        const dispatcherr = connection.play(stream, {
         type: "converted" 
        });
         
        dispatcherr.on("finish", () => {
          message.member.voice.channel.leave();
      })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'adem',
  description: 'Random Atamızın Resmini Paylaşır.',
  usage: 'adem'

}

