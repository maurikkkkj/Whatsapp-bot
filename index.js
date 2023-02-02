const wazap = require('@open-wa/wa-automate');
const axios = require('axios');
const fs = require('fs');

wazap.create({
  sessionId: "WhatsApp",
  multiDevice: true,
  authTimeout: 60,
  blockCrashLogs: true,
  disableSpins: true,
  headless: false,
  hostNotificationLang: 'PT_BR',
  logConsole: false,
  popup: true,
  qrTimeout: 0,
}).then(client => start(client));

function start(client) {
client.onMessage(async message => {
 //INICIAMENTO PARA CRIAR SEUS COMANDOS!
if (message.body === "pensamento suicidas") {
const gif4 = await fs.readFileSync('./lib/pensando.webp', { encoding: 'base64' });
await client.sendImageAsSticker(message.from, `data:image/gif;base64,${gif4.toString('base64')}`);
}
  
if (message.body === "sou gay") {
await client.reply(message.from, `já sabia!`)
}
    }
  });
}
