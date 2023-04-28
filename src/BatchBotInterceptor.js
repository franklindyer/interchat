const ChatBotInterceptor = require("./ChatBotInterceptor.js")

class BatchBotInterceptor extends ChatBotInterceptor {

    constructor(bot, n) {
        super(bot);

        this.limit = n;
        this.lastuser = null;
        this.queue = [];
    }

    handle_msg(name, userid, msg) {
        if (userid != this.lastuser) {
            this.lastuser = userid;
            this.queue = [];
        }

        this.queue.push(msg)

        if (this.queue.length == this.limit) {
            this.service.handle_msg(this.name, this.lastuser, this.queue.join("\n"));
            this.queue = [];
        }
    }

    send_msg(userid, msg) {
        this.bot.send_msg(userid, msg);
    }

}

module.exports = BatchBotInterceptor
