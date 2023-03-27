from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response Response
from rest_framework import status
# Create your views here.

@api_view(['POST'])
def register_account(request):
    """
    create or get account for a user
    """
    pass


@api_view(['POST'])
def login_account(request):
    """
    login into an account
    """
    pass


@api_view(['POST']):
def logout_account(request):
    """
    logout from an account
    """
    pass


@api_view(['POST', 'GET', 'PUT', 'DELETE'])
def register_student(request):
    """
    create or get student
    """
    if request.method == 'POST':
        pass

    if request.method == 'GET':
        pass

    if request.method == 'PUT':
        pass

    if request.method == 'DELETE':
        pass

