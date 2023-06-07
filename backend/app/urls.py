from django.urls import path

# from .views import LoginView, LogoutView, RegisterView, UserView, TeacherView, TeacherDetailView, StudentView, CourseView, CourseDetailView, ModuleView, StudentDetailView
from .views import *
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/', UserView.as_view(), name='user'),
    path('logout/', LogoutView.as_view(), name='logout'),


    path('teacher/', TeacherView.as_view(), name='teacher'),
    path('teacher/<int:pk>/', TeacherDetailView.as_view(), name='teacher'),
    
    path('students/', StudentView.as_view(), name='students'),
    path('students/<int:pk>/', StudentDetailView.as_view(), name='student-detail'),

    path('courses/', CourseView.as_view(), name='courses'),
    path('courses/<int:pk>', CourseDetailView.as_view(), name='course-detail'),

    path('modules/', ModuleView.as_view(), name='modules'),

    # Q&Ans Forum
    path('qans/', homePageView.as_view(), name='qans'),      
    path('qans/<int:pk>/', homePageDetailView.as_view(), name='index'),
    # path('new-question/<int:pk>/', newQuestionView.as_view(), name='new-question'),
    # path('question/<int:id>', views.questionPage, name='question'),
    path('reply/', ReplyView.as_view(), name='reply'),
    # path('reply/<int:pk>', ReplyView.as_view(), name='reply')
]
