class ChatBot:
    def __init__(self, platform, credfile):
        self.platform = platform
        self.credfile = credfile

    def set_service(self, service):
        self.service = service

    def connect(self):
        return False

    def disconnect(self):
        return False

    def message(self, text, user):
        return False
