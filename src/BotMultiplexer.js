const ChatBotInterceptor = require("./ChatBotInterceptor.js")

class BotMultiplexer extends ChatBotInterceptor {

    constructor(name, bots) {
        super(name, bots);
    }

    handle_msg(name, userid, msg) {
        this.service.handle_msg(this.name, [name, userid], msg);
    }

    send_msg(userid, msg) {
        this.bots.forEach(b => {
            if (b.name == userid[0]) {
                b.send_msg(userid[1], msg);
            }
        });
    }

}

module.exports = BotMultiplexer
