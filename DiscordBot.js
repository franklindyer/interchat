const Discord = require("discord.js")
const ChatBot = require("./ChatBot.js")

class DiscordBot extends ChatBot {

    constructor(name) {
        super("DISCORD_TOKEN", name)
        this.token = this.creds
        this.init_client()
    }

    init_client() {
        this.bot = new Discord.Client({
            intents: [
                Discord.GatewayIntentBits.Guilds,
                Discord.GatewayIntentBits.DirectMessages,
                Discord.GatewayIntentBits.GuildMessages,
                Discord.GatewayIntentBits.MessageContent
            ],
            partials: [
                Discord.Partials.Message,
                Discord.Partials.Channel
            ]
        });

        this.bot.owner = this;

        this.bot.on("messageCreate", function(message) {
            if (message.author.bot) return;
            this.owner.handle_msg(message.author.id, message.content);
        });
    }

    handle_msg(userid, msg) {
        if (this.service != null) {
            this.service.handle_msg(this.name, userid, msg)
        }
    }

    send_msg(userid, msg) {
        this.bot.users.fetch(userid).then(user => user.send(msg)).catch(error => {})
    }

    run() {
        this.bot.login(this.token)
    }

}

module.exports = DiscordBot
