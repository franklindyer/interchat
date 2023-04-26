import asyncio
from ChatBot import *
from threading import Thread

def run_loop(loop):
    asyncio.set_event_loop(loop)
    loop.run_forever()

class AsyncEchoService:

    def __init__(self, cbot):
        self.cbot = cbot
        cbot.set_service(self)

        self.loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self.loop)

    def handle_msg(self, userid, message):
        self.loop.create_task(self.cbot.send_msg(userid, f"You are {userid} and said {message}"))

    def run(self):
        print(f"{self.cbot.platform} echo bot connected!")
        self.loop.create_task(self.cbot.run())
        self.loop.run_forever()
