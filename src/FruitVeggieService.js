const ChatService = require("./ChatService.js")

class FruitVeggieService extends ChatService {

    constructor(bot) {
        super();
        this.bot = bot;
        this.bot.set_service(this);

        this.fruits = [
            "apple",
            "banana",
            "pear"
        ]
        this.veggies = [
            "carrot",
            "cabbage",
            "bokchoy"
        ]
    }

    handle_msg(bot, userid, msg) {
        msg.split(" ").forEach(word => {
            if (this.fruits.includes(word)) {
                this.bot.send_msg(userid, `${word} is a fruit`);
            } else if (this.veggies.includes(word)) {
                this.bot.send_msg(userid, `${word} is a veggie`);
            }
        })
    }

    run() {
        this.bot.run();
    }

}

module.exports = FruitVeggieService
