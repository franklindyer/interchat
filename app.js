const EchoService = require("./src/EchoService.js")
const FruitVeggieService = require("./src/FruitVeggieService.js")
const TalkTubeService = require("./src/TalkTubeService.js")
const DiscordBot = require("./src/DiscordBot.js")
const TelegramBot = require("./src/TelegramBot.js")
const SlackBot = require("./src/SlackBot.js")

db = new DiscordBot("discord-bot");
sb = new SlackBot("slack-bot");
tb = new TelegramBot("telegram-bot");

[db, sb, tb].forEach(b => {
    new FruitVeggieService(b).run();
})
