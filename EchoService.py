import asyncio
from ChatBot import *
from threading import Thread

def run_loop(loop):
    asyncio.set_event_loop(loop)
    loop.run_forever()

class EchoService:

    def __init__(self, cbot):
        self.cbot = cbot
        cbot.set_service(self)

    def handle_msg(self, userid, message):
        self.cbot.send_msg(userid, f"You are {userid} and said {message}")

    def connect(self):
        self.cbot.connect()
