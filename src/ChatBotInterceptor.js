class ChatBotInterceptor {

    constructor(bot) {
        this.bot = bot;
        this.name = bot.name
        this.bot.set_service(this);
    }

    set_service(service) {
        this.service = service;
    }

    handle_msg(name, userid, msg) {}

    send_msg(userid, msg) {}

    run() {
        this.bot.run();
    }

}

module.exports = ChatBotInterceptor
