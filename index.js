const Botkit = require('botkit');

const contr = require('./controller.js');
const constants =  require('./constants.js');

const controller = Botkit.slackbot({
  debug: false,
  stale_connection_timeout: 86400,
  retry: Infinity
});

const bot = controller.spawn({
  token: constants.apiToken
});

const initRTM = (bot) => {
  bot.startRTM((err, bot, payload) => {
    if (err) {
      console.log(`FOUND AN ERROR on startRTM: ${err}`);
      return setTimeout(initRTM, 60000);
    }
    console.log(payload);
  });
};

initRTM(bot);

contr(controller);
