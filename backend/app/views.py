from importlib.metadata import requires
from multiprocessing import context
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework import viewsets
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime              #<-- pyjwt

from .models import *
from .serializers import *

# Create your views here.

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        # return Response({'message': 'Login successful!'})
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')#.decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response
# return Response(token)


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'Logout successful!'
        }
        return response



class TeacherView(generics.ListCreateAPIView):
    # permission_classes = [IsAdminUser]
    queryset = TeacherModel.objects.all()
    serializer_class = TeacherSerializer

class TeacherDetailView(APIView):
    def get(self, request, pk):
        print("Id :", pk)
        teacher = TeacherModel.objects.get(id=pk)
        serializer = TeacherSerializer(teacher)
        return Response(serializer.data)


class StudentView(generics.ListCreateAPIView):
    # permission_classes = [IsAdminUser]
    queryset = StudentModel.objects.all()
    serializer_class = StudentSerializer

class StudentDetailView(APIView):
    def get(self, request, pk):
        print("Id :", pk)
        student = StudentModel.objects.get(id=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data)


class CourseView(generics.ListCreateAPIView):
    # permission_classes = [IsAdminUser]
    queryset = CourseModel.objects.all()
    serializer_class = CourseSerializer


class CourseDetailView(APIView):
    def get(self, request, pk):
        cours = CourseModel.objects.get(id=pk)
        serializer = CourseSerializer(cours)
        modules = ModuleModel.objects.filter(course=cours)
        # print(modules)
        serializer = ModuleSerializer(modules, many=True)
        return Response(serializer.data)


class ModuleView(generics.ListCreateAPIView):
    # permission_classes = [IsAdminUser]
    queryset = ModuleModel.objects.all()
    serializer_class = ModuleSerializer



# Q&Ans Forum
class homePageView(generics.ListCreateAPIView):
    queryset = QuestionModel.objects.all()
    serializer_class = QAnsSerializer

class homePageDetailView(APIView):
    def get(self, request, pk):
        course = CourseModel.objects.get(id=pk)
        questions = QuestionModel.objects.filter(category=course)
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)
    def post(self, request, pk):
        course = CourseModel.objects.get(id=pk)
        print("COURSE =", pk)
        user= request.user
        print("USER = ", user)
        serializer = newQuestionSerializer(data=request.data, context={'course':pk, 'user':user})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class QuestionView(APIView):
    def get(self, request, pk):
        course = CourseModel.objects.get(id=pk)
        questions = QuestionModel.objects.filter()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)

class ReplyView(generics.ListCreateAPIView):
    queryset = ResponseModel.objects.all()
    serializer_class = ReplySerializer

