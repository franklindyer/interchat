const creds = require("./creds.json")
const { App } = require("@slack/bolt")
const ChatBot = require("./ChatBot.js")

class SlackBot extends ChatBot {

    constructor(name) {
        super("SLACK_CREDS", name)
        this.token = this.creds.token
        this.apptoken = this.creds.apptoken
        this.init_client()
    }

    init_client() {
        this.bot = new App({
            token: this.token,
            appToken: this.apptoken,
            socketMode: true
        })

        this.bot.event('message', async ({event, client, context}) => {
            this.handle_msg(event.channel, event.text)
        })

    }    

    handle_msg(chanid, msg) {
        if (this.service != null) {
            this.service.handle_msg(this.name, chanid, msg)
        }
    }

    send_msg(chanid, msg) {
        this.bot.client.chat.postMessage({
            channel: chanid,
            text: msg
        })
    }

    run() {
        this.bot.start(3000)
    }

}

module.exports = SlackBot
