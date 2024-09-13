from django.db import models

# Create your models here.

class Departments(models.Model):
  DepartmentId = models.AutoField(primary_key=True)
  DepartmentName = models.CharField(max_length=100)
  class Meta:
    verbose_name = 'Department'  # Singular form
    verbose_name_plural = 'Departments'  # Plural form (without an 's')
    

class Employees(models.Model):
  EmployeeId = models.AutoField(primary_key=True)
  EmployeeName = models.CharField(max_length=100)
  Department = models.CharField(max_length=100)
  DateOfJoining = models.DateField()
  PhotoFileName = models.CharField(max_length=100)
  class Meta:
    verbose_name = 'Employee'  # Singular form
    verbose_name_plural = 'Employees'  # Plural form (without an 's')