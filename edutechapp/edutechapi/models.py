from django.db import models
from django.contrib.auth.models import User

# Create your models here.

GENDER_CHOICES = [
    ('MALE', 'Male'),
    ('FEMALE', 'Female'),
    ('OTHER', 'Other')
]

DEPARTMENT_CHOICES = [
    ('SCIENCE', 'Science'),
    ('COMMERCIAL', 'Commercial'),
    ('ART', 'Art'),
    ('NONE', 'None')
]

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField(default=0)
    avatar = models.ImageField(upload_to='avatar', default=None)


class Student(models.Model):
    account = models.OneToOneField(Account, on_delete=models.CASCADE)
    department = models.CharField(default='NONE', choices=DEPARTMENT_CHOICES)
    gender = models.CharField(choices=GENDER_CHOICES)
    school = models.TextField(default='')

class Feeds(models.Model):
    pass
