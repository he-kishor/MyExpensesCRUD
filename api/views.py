from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request,'authentication/login.html') #authentication/login

def add_expense(request):
    return render(request,'expenses/add_expenses.html')
