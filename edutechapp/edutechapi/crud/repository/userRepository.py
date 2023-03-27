from django.contrib.auth.models import User
from eductechapi.models import Account

class UserRepository:
    def __init__(self, user):
        self.user = user

    def save(self):
        pass

    def update(self):
        pass

    def delete(self):
        pass

    def getById(self):
        pass


userRepository = UserRepository(User())

