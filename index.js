const wa = require('@open-wa/wa-automate');
const axios = require('axios');
const fs = require('fs');

wa.create({
  sessionId: "WhatsApp",
  multiDevice: true,
  authTimeout: 60,
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'PT_BR',
  logConsole: false,
  popup: true,
  qrTimeout: 0,
}).then(client => start(client));

function start(client) {
client.onMessage(async message => {
if (message.body === "thinking") {
const gif4 = await fs.readFileSync('./lib/pensando.webp', { encoding: 'base64' });
await client.sendImageAsSticker(message.from, `data:image/gif;base64,${gif4.toString('base64')}`);
}
  
  if (message.body === "hello") {
  let sections = [
  {title:'t',
  rows:[
  {title:'t', 
  description: 'a'},
  {title:'b'}
  ]
  }];
  let list = new list_response('List body','btnText',sections,'Title','footer');
  await client.sendText(message.from, list);
    }
  });
}
