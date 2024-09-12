# Is the entry point for asgi compatible webservers to serve the project

"""
ASGI config for WEBAPP01_DJANGOAPI project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WEBAPP01_DJANGOAPI.settings')

application = get_asgi_application()
