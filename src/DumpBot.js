const ChatBot = require("./ChatBot.js")

class DumpBot extends ChatBot {

    constructor(name) {
        super("", name);
    }

    send_msg(userid, msg) {
        console.log(msg);
    }

    run() {
        console.log("Dump bot going online")
        this.service.handle_msg(this.name, 0, "Dump bot connected now!")
    }

}

module.exports = DumpBot
