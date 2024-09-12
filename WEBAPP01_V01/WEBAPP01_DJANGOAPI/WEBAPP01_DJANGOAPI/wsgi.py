# Is the entry point for wsgi compatible webservers to serve the project

"""
WSGI config for WEBAPP01_DJANGOAPI project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WEBAPP01_DJANGOAPI.settings')

application = get_wsgi_application()
