const constants = require('./constants.js');

module.exports = (controller) => {
  controller.on('rtm_close', (err, bot, payload) => {
    console.log(payload);
    if (err) {
      log(`FOUND AN ERROR on closing: ${err}`);
      initRTM();
    }
    console.log('Bot closed');
    initRTM();
  });

  controller.hears('hello',
    ['direct_message', 'direct_mention', 'mention', 'ambient'], (bot, message) => {
      bot.reply(message, 'world');
    });
  });

}
