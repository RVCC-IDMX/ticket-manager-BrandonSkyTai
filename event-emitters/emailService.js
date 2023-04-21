const { log } = console;

class EmailService {
  // eslint-disable-next-line class-methods-use-this
  send(email) {
    log(`Sending email to ${email}\n`);
  }
}

module.exports = EmailService;
