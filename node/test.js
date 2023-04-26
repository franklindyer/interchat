const EchoService = require("./EchoService.js")
const DiscordBot = require("./DiscordBot.js")

db = new DiscordBot()
es = new EchoService(db)
es.run()
