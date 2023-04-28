const EchoService = require("./src/EchoService.js")
const FruitVeggieService = require("./src/FruitVeggieService.js")
const TalkTubeService = require("./src/TalkTubeService.js")
const DelayBotInterceptor = require("./src/DelayBotInterceptor.js")
const DiscordBot = require("./src/DiscordBot.js")
const TelegramBot = require("./src/TelegramBot.js")
const SlackBot = require("./src/SlackBot.js")
const DumpBot = require("./src/DumpBot.js")

db = new DiscordBot("discord-bot");
sb = new SlackBot("slack-bot");
tb = new TelegramBot("telegram-bot");
dump = new DumpBot("dump-bot")

// [db, sb, tb].forEach(b => {
//    new EchoService(new DelayBotDecorator(new DelayBotDecorator(b, 3), 3)).run();
// })

new TalkTubeService(dump, new DelayBotInterceptor(tb, 4)).run()
