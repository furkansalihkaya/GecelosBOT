const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')
const get = require("get-json");

module.exports = client => {
  client.on("ready",()=>{
  console.log(`Gecelos BOT Aktif!`)
  setInterval(function(){
      get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCjlez3vANipcYbRiU0t0HKQ&key=AIzaSyAFv52r9yKxUhicZd0sR6MMoW4m9yB4eac', function(error, response){
          var s = response.items[0].statistics;
          client.user.setActivity(`Abone: ${s.subscriberCount} Küsur`);
      });
  },60000);
});
  
}
 