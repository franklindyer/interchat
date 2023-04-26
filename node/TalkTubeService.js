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
        console.log(`Talk tube now processing msg ${msg} incoming from ${botname}`)
        console.log(`User 1 is: ${this.user1}`);
        console.log(`User 2 is: ${this.user2}`);
        if (botname === this.bot1.name) {
            console.log("The message is from the first bot.")
            this.user1 = userid;
            if (this.user2 != null) {
                this.bot2.send_msg(this.user2, msg);
            }
        } else if (botname === this.bot2.name) {
            console.log("The message is from the second bot.")
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
