from django.urls import path

from django.conf.urls.static import static
from django.conf import settings

from EmployeeApp import views  # Assuming your views are in EmployeeApp
from django.urls import path, include # Include the app's URLs

urlpatterns = [
  path(r'department', views.departmentApi), # App-level department URL
  path(r'', views.home, name = 'home'),  # Define home route
  path(r'department/<int:id>', views.departmentApi),
  path(r'employee', views.employeeApi),
  path(r'employee/<int:id>', views.employeeApi),
  path(r'employee/SaveFile', views.SaveFile)
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)