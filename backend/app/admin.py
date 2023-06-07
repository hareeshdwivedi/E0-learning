from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserModelAdmin

from .models import *

# Register your models here.

class UserModelAdmin(BaseUserModelAdmin):
    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserModelAdmin that reference specific fields on auth.User.
    list_display = ('id', 'email', 'name', 'manager', 'teacher', 'student', 'is_active', 'created_at',)
    list_filter = ('is_admin',)
    fieldsets = (
        ('User Credentials', {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name', 'manager')}),
        ('Permissions', {'classes': ('collapse',), 'fields': ('teacher', 'student',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'manager', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email', 'id')
    filter_horizontal = ()


# Now register the new UserModelAdmin...
admin.site.register(User, UserModelAdmin)

admin.site.register(GradeModel)


admin.site.register(CourseModel)
admin.site.register(ModuleModel)
admin.site.register(TeacherModel)
admin.site.register(StudentModel)

admin.site.register(QuestionModel)
admin.site.register(ResponseModel)