from .views import RegistrationView
from django.urls import path
urlpatterns = [
    path('',RegistrationView.as_view(),name="register")
]
