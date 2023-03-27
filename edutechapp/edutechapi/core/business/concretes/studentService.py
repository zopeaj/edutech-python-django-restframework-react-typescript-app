from edutechapp.core.business.abstracts.userService import userService
from edutechapp.models import Student

class StudentService:
    def __init__(self, userService):
        self.userService = userService

    def createStudent(self):
        pass

    def getStudentById(self):
        pass

    def deleteStudent(self):
        pass

    def updateStudent(self):
        pass

studentService = StudentService(userService)

