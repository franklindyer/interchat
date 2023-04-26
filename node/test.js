const EchoService = require("./EchoService.js")
const TalkTubeService = require("./TalkTubeService.js")
const DiscordBot = require("./DiscordBot.js")
const TelegramBot = require("./TelegramBot.js")

tb = new TelegramBot("Mr. Telegram")
db = new DiscordBot("Dr. Discord")

// es1 = new EchoService(tb)
// es2 = new EchoService(db)
// es1.run()
// es2.run()

tts = new TalkTubeService(db, tb)
tts.run()
