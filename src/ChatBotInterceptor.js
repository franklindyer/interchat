class ChatBotInterceptor {

    constructor(name, bots) {
        this.bots = bots;
        this.name = name
        this.bots.forEach(b => b.set_service(this));
    }

    set_service(service) {
        this.service = service;
    }

    handle_msg(name, userid, msg) {}

    send_msg(userid, msg) {}

    run() {
        this.bots.forEach(b => b.run());
    }

}

module.exports = ChatBotInterceptor
