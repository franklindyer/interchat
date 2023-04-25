from ChatBot import *
import discord
from discord.ext import commands
import requests
import asyncio

class DiscordBot(ChatBot):
    def __init__(self, credfile):
        super().__init__("discord", credfile)
        self.token = open(credfile, 'r').read()
        self.intents = discord.Intents.default()
        self.bot = commands.Bot(command_prefix="$", intents=self.intents)
        self.register_commands()

    def set_service(self, service):
        self.service = service
        
    def handle_msg(self, userid, msg):
        self.service.handle_msg(userid, msg)

    def send_msg(self, userid, msg):
        self.bot.dispatch("do_send", userid, msg)
            
    def register_commands(self):
        @self.bot.event
        async def on_message(message):
            self.handle_msg(message.author.id, message.content)
       
        @self.bot.event
        async def on_do_send(userid, msg):
            user = await self.bot.fetch_user(userid)
            try:
                await user.send(msg)
            except discord.errors.HTTPException as e:
                return
 
        
    def connect(self):
        self.bot.run(self.token)
        print("Discord bot successfully connected")

        
