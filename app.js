const EchoService = require("./src/EchoService.js")
const FruitVeggieService = require("./src/FruitVeggieService.js")
const TalkTubeService = require("./src/TalkTubeService.js")
const BatchBotInterceptor = require("./src/BatchBotInterceptor.js")
const DiscordBot = require("./src/DiscordBot.js")
const TelegramBot = require("./src/TelegramBot.js")
const SlackBot = require("./src/SlackBot.js")
const DumpBot = require("./src/DumpBot.js")
const AlertBot = require("./src/AlertBot.js")
const TCPSockBot = require("./src/TCPSockBot.js")
const BotMultiplexer = require("./src/BotMultiplexer.js")

// sckb = new TCPSockBot("socket-bot", 6789);
dmpb = new DumpBot("dump-bot");
tb = new TelegramBot("telegram-bot");
ab = new AlertBot("alert-bot");

// new TalkTubeService(new BotMultiplexer("mux", [dmpb, sckb]), tb).run()
new TalkTubeService(ab, tb).run();
