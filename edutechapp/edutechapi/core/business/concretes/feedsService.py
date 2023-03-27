from edutechapp.core.business.abstracts.userService import userService
from edutechapp.models import Account, Student

class FeedsService:
    def __init__(self, userService):
        self.userService = userService

    def getUserByQuestion(self):
        pass


feedsService = FeedsService(userService)
