from django.db import models

# Create your models here.

class Departments(models.Model):
  DepartmentId = models.AutoField(primary_key=True, verbose_name='ID')
  DepartmentName = models.CharField(max_length=100, verbose_name='Name')
  class Meta:
    verbose_name = 'Department'  # Singular form
    verbose_name_plural = 'Departments'  # Plural form (without an 's')
    

class Employees(models.Model):
  EmployeeId = models.AutoField(primary_key=True, verbose_name='ID')
  EmployeeName = models.CharField(max_length=100, verbose_name='Name')
  Department = models.CharField(max_length=100, verbose_name='Department')
  EmployeeAge = models.DateField(verbose_name='Age')
  EmployeeMobile = models.CharField(max_length=100, verbose_name='Mobile Number')
  EmployeeAddress = models.CharField(max_length=100, verbose_name='Address')
  DateOfJoining = models.DateField(verbose_name='Join Date')
  PhotoFileName = models.CharField(max_length=100, verbose_name='Photo')
  class Meta:
    verbose_name = 'Employee'  # Singular form
    verbose_name_plural = 'Employees'  # Plural form (without an 's')