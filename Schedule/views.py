from django.views import generic
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from django.http import Http404


class ReceptionistView(generic.ListView):
    template_name = 'Schedule/AppointmentList-Receptionist.html'

    def get_queryset(self):
        return None

class PractionerView(generic.ListView):
    template_name = 'Schedule/AppointmentList-Receptionist.html'

    def get_queryset(self):
        return None


class AdminView(generic.ListView):
    template_name = 'Schedule/AppointmentList-Admin.html'

    def get_queryset(self):
        return None


class AdminRegister(View):
    template_name = 'Schedule/AddUser-Adminstrator.html'

    def get(self, request):
        pass

    def post(self, request):
        pass