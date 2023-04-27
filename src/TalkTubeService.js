const ChatService = require("./ChatService.js")

class TalkTubeService {

    constructor(bot1, bot2) {
        this.bot1 = bot1;
        this.bot2 = bot2;
        this.bot1.set_service(this);
        this.bot2.set_service(this);

        this.user1 = null;
        this.user2 = null;
    }

    handle_msg(botname, userid, msg) {

        if (botname === this.bot1.name) {
            this.user1 = userid;
            if (this.user2 != null) {
                this.bot2.send_msg(this.user2, msg);
            }
        } else if (botname === this.bot2.name) {
            this.user2 = userid;
            if (this.user1 != null) {
                this.bot1.send_msg(this.user1, msg);
            }
        } 
    }

    run() {
        this.bot1.run();
        this.bot2.run();
    }

}

module.exports = TalkTubeService
