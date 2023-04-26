class EchoService {

    constructor(bot) {
        this.bot = bot;
        this.bot.set_service(this);
    }

    handle_msg(userid, msg) {
        this.bot.send_msg(userid, msg);
    }

    run() {
        this.bot.run();
    }

}

module.exports = EchoService
