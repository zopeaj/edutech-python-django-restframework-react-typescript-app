from edutechapi.crud.repository.userRepository import UserRepository

class UserService:
    def __init__(self, userRepository):
        self.userRepository = userRepository

    def create(self):
        pass

    def update(self):
        pass

    def getById(self):
        pass

    def delete(self):
        pass

userService = UserService(UserRepository())
