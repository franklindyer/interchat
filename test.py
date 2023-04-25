from DiscordBot import *
from XMPPBot import *
from EchoService import *
import asyncio

def main():
    db = DiscordBot("creds/discord_token.txt")
    xb = XMPPBot("creds/xmpp_creds.txt")  

    es = EchoService(db)
    es.connect()

main()
