from email.policy import default
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'manager', 'teacher', 'student']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class StudentSerializer(serializers.ModelSerializer):
    courses = serializers.StringRelatedField(many=True)
    class Meta:
        model = StudentModel
        fields = '__all__' #['id', 'user', 'name', 'grade', 'courses']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class TeacherSerializer(serializers.ModelSerializer):
    # students = serializers.SerializerMethodField(read_only=True)
    # students_na = serializers.CharField(source='students.name')
    students = serializers.StringRelatedField(many=True)
    class Meta:

        model = TeacherModel
        fields = '__all__'#['id', 'user', 'Name', 'subject', 'students']

    def get_students_na(self, obj):
        print(obj)
        return obj.students.name

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseModel
        fields = '__all__'#['id', 'grade', 'subject']

    # def validate(self, data):
    #     print(data)
    #     print(self.context)
    #     if data.get('body') is None:
    #         raise serializers.validationError("Empty Form !")
    #     # data['author'] = User.objects.filter(email=self.context.get('user'))
    #     data['category'] = CourseModel.objects.get(id=self.context.get('course')) # self.context.get('course')
    #     print(data)
    #     return data

    

class ModuleSerializer(serializers.ModelSerializer):
    grade = serializers.CharField(source='course.grade')
    course = serializers.CharField(source='course.subject')
    class Meta:
        model = ModuleModel
        fields = '__all__'#['course', 'module', 'completed']


# Q&Ans Forum
class QAnsSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionModel
        fields = '__all__'#['id', 'question', 'answer', 'user']

class QuestionSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    # author = UserSerializer().fields['name']
    class Meta:
        model = QuestionModel
        fields = '__all__'#['id', 'author', 'title', 'body', 'category', 'created_at', 'updated_at']
        # ordering = ('date',)

class newQuestionSerializer(serializers.Serializer):
    # author = UserSerializer().fields['name']
    body = serializers.CharField(max_length=200)
    category = serializers.CharField(max_length=100, default=None)
    
    def validate(self, data):
        print(data)
        print(self.context)
        if data.get('body') is None:
            raise serializers.validationError("Empty Form !")
        # data['author'] = User.objects.filter(email=self.context.get('user'))
        data['category'] = CourseModel.objects.get(id=self.context.get('course')) # self.context.get('course')
        print(data)
        return data
    
    def create(self, validated_data):
        return QuestionModel.objects.create(**validated_data)

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponseModel
        fields = '__all__'#['id', 'question', 'answer', 'user']
