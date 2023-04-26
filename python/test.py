from DiscordBot import *
from XMPPBot import *
from TelegramBot import *
from EchoService import *
import asyncio

def main():
    db = DiscordBot("creds/discord_token.txt")
    xb = XMPPBot("creds/xmpp_creds.txt")  
    tb = TelegramBot("creds/telegram_token.txt")

    es = EchoService(xb)
    es.run()

main()