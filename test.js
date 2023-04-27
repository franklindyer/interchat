const EchoService = require("./EchoService.js")
const TalkTubeService = require("./TalkTubeService.js")
const DiscordBot = require("./DiscordBot.js")
const TelegramBot = require("./TelegramBot.js")
const SlackBot = require("./SlackBot.js")

tb = new TelegramBot("Mr. Telegram")
db = new DiscordBot("Dr. Discord")
sb = new SlackBot("Señor Slack")

// es = new EchoService(sb)
// es.run()

// es2 = new EchoService(db)
// es1.run()
// es2.run()

tts = new TalkTubeService(db, sb)
tts.run()
