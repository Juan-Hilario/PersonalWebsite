from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
   return render(request, "htmlManager/index.html",
                 {"title": "Home"})

def portfolio(request):
   return render(request, "htmlManager/Portfolio.html",
                 {"title": "Portfolio"})

def contactInfo(request):
   return render(request, "htmlManager/ContactInfo.html",
                 {"title": "Contact/Info"})

