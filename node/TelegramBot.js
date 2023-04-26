const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const creds = require("./creds.json")
const ChatBot = require("./ChatBot.js")

class TelegramBot extends ChatBot {

    constructor(name) {
        super("TELEGRAM_TOKEN", name)
        this.token = this.creds
        this.init_client()
    }

    init_client() {
        this.bot = new Telegraf(this.token);
        this.bot.owner = this;
        this.bot.on(message('text'), (ctx) => {
            this.handle_msg(ctx.message.chat.id, ctx.message.text);
        })
    }

    handle_msg(chatid, msg) {
        if (this.service != null) {
            this.service.handle_msg(this.name, chatid, msg)
        }
    }

    send_msg(chatid, msg) {
        this.bot.telegram.sendMessage(chatid, msg)
    }

    run() {
        this.bot.launch();
    }

}

module.exports = TelegramBot
