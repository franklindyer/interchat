const creds = require("./creds.json")

class ChatBot {

    constructor(credkey, name) {
        this.creds = creds[credkey]
        this.name = name
    }

    set_service(service) {
        this.service = service;
    }

    handle_msg(userid, msg) {}

    send_msg(userid, msg) {}

    run() {}

}

module.exports = ChatBot;
