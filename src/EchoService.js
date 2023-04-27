const ChatService = require("./ChatService.js")

class EchoService extends ChatService {

    constructor(bot) {
        super();
        this.bot = bot;
        this.bot.set_service(this);
    }

    handle_msg(bot, userid, msg) {
        this.bot.send_msg(userid, msg);
    }

    run() {
        this.bot.run();
    }

}

module.exports = EchoService
