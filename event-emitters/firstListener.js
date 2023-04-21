// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

const { log } = console;

const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(10);

ticketManager.once('buy', () => {
  log(chalk.bgGreenBright('Someone bought a ticket!'));
});
