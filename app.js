const EchoService = require("./src/EchoService.js")
const TalkTubeService = require("./src/TalkTubeService.js")
const DiscordBot = require("./src/DiscordBot.js")
const TelegramBot = require("./src/TelegramBot.js")
const SlackBot = require("./src/SlackBot.js")

tb = new TelegramBot("Mr. Telegram")
db = new DiscordBot("Dr. Discord")
sb = new SlackBot("Señor Slack")

// es = new EchoService(sb)
// es.run()

// es2 = new EchoService(db)
// es1.run()
// es2.run()

tts = new TalkTubeService(sb, tb)
tts.run()
