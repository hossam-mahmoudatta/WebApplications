from django.contrib import admin
from .models import Employees, Departments  # Import your model

# Register your models here.


# Register the model with the admin site
class EmployeeAdmin(admin.ModelAdmin):
  list_display = ('EmployeeId',
                  'EmployeeName',
                  'Department',
                  'DateOfJoining',
                  'PhotoFileName')  # Customize columns in the list view
  search_fields = ('EmployeeId',
                  'EmployeeName',
                  'Department',
                  'DateOfJoining',
                  'PhotoFileName')  # Add search functionality
  
  # # Define methods to change the display names of the columns
  # def first_name_display(self, obj):
  #   return obj.first_name
  #   first_name_display.short_description = 'First Name'  # Custom column title

  # def department_display(self, obj):
  #   return obj.department.department_name
  #   department_display.short_description = 'Department Name'  # Custom column title
  
class DepartmentAdmin(admin.ModelAdmin):
  list_display = ('DepartmentId',
                  'DepartmentName')  # Customize columns in the list view
  search_fields = ('DepartmentId',
                  'DepartmentName')  # Add search functionality



admin.site.register(Employees,
                    EmployeeAdmin)

admin.site.register(Departments,
                    DepartmentAdmin)

