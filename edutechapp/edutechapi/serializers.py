from rest_framework.serializers import ModelSerializer
from edutectapi.models import Account, Student

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        exclude = ('user', )

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        exclude = ('account', )

