const ChatBot = require("./ChatBot.js")
var alert = require("alert")

class AlertBot extends ChatBot {

    constructor(name) {
        super("", name);
    }

    send_msg(useless, msg) {
        alert(msg);
    }

    run() {
        console.log("Alerting bot going online!");
        this.service.handle_msg(this.name, 0, "Alert bot online!");
    }

}

module.exports = AlertBot
