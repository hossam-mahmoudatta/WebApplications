from django.urls import path
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
  # path('', home_view),                         # Root URL of the app
  # path('department/', department_view),        # App-level department URL
  # path('department/<int:id>/', department_detail_view),  # App-level detail URL
  
  path(r'department', views.departmentApi),
  path(r'department/<int:id>/', views.departmentApi),
  
  path(r'employee', views.employeeApi),
  path(r'employee/<int:id>/', views.employeeApi),
  
  path(r'Employee/SaveFile', views.SaveFile)
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)