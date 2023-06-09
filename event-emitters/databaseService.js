// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  // eslint-disable-next-line class-methods-use-this
  save(email, price, timestamp) {
    log(chalk.bgGray(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})\n`));
  }
}

module.exports = DatabaseService;
