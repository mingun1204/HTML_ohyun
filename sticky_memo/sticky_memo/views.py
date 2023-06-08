from django.shortcuts import HttpResponse

def my_home(request):
    return HttpResponse("<h1>HI<h1/>")