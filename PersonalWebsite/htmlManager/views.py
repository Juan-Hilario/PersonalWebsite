from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
   return render(request, "htmlManager/Home.html",
                 {"title": "Home"})

def profolio(request):
   return render(request, "htmlManager/Profolio.html",
                 {"title": "Profolio"})

def contactInfo(request):
   return render(request, "htmlManager/ContactInfo.html",
                 {"title": "Contact/Info"})

