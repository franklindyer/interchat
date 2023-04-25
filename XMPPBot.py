from ChatBot import *
from sleekxmpp import ClientXMPP

import asyncio
import logging

class XMPPBot(ChatBot):
    def __init__(self, credfile):
        ChatBot.__init__(self, "xmpp", credfile)
        creds = open(credfile, 'r').read().split("\n")
        self.user = creds[0]
        self.passwd = creds[1]
        self.bot = ClientXMPP(self.user, self.passwd)
        self.bot.ca_certs = None
        self.set_xmpp_handlers()

    def set_service(self, service):
        self.service = service

    def set_xmpp_handlers(self):
        self.bot.add_event_handler("session_start", self.handle_xmpp_startsess)
        self.bot.add_event_handler("message", self.handle_xmpp_msg)

    def handle_xmpp_msg(self, msg):
        self.handle_msg(msg["from"], msg["body"])

    def handle_xmpp_startsess(self, evt):
        self.bot.send_presence()
        self.bot.get_roster()

    def handle_msg(self, userid, msg):
        print(f"Message {msg} from {userid}")
        self.service.handle_msg(userid, msg)

    def send_msg(self, jid, msg):
        self.bot.sendMessage(jid, msg)

    def connect(self):
        logging.basicConfig(level=logging.DEBUG,
                        format='%(levelname)-8s %(message)s')

        self.bot.connect()
        self.bot.process(block=True)
