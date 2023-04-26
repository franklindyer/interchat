from ChatBot import *
import telebot

class TelegramBot(ChatBot):
    def __init__(self, credfile):
        super().__init__("telegram", credfile)
        self.token = open(credfile, 'r').read()[:-1]
        self.bot = telebot.TeleBot(self.token)
        self.register_commands()

    def handle_msg(self, userid, msg):
        self.service.handle_msg(userid, msg)

    def send_msg(self, userid, msg):
        self.bot.send_message(userid, msg)

    def register_commands(self):
        @self.bot.message_handler()
        def handle_msg(message):
            self.handle_msg(message.from_user.id, message.text)

    def run(self):
        self.bot.infinity_polling()

