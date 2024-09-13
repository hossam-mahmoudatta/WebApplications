from django.apps import AppConfig


class EmployeeappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'EmployeeApp'
    verbose_name = 'Employee Management System'  # Custom app name shown in admin
