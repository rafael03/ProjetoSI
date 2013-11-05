#!/usr/bin/python
import os

os.system('sudo /opt/lampp/lampp start')
os.system('python manage.py runserver')

#Abre o projeto no Firefox
#os.system('firefox localhost:8000')
