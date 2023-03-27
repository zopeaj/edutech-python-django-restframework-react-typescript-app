from edutechapi.models import Account

class StudentRepository:
    def __init__(self, account):
        self.account = account

    def save(self):
        pass

    def update(self):
        pass

    def delete(self):
        pass

    def getById(self):
        pass

studentRepository = StudentRepository(Account())
