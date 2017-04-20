from django.views import generic
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from django.http import Http404


class ReceptionistView(generic.ListView):
    template_name = 'Schedule/AppointmentList-Receptionist.html'

    def get_queryset(self):
        return None


class PractitionerView(generic.ListView):
    template_name = 'Schedule/AppointmentList-Receptionist.html'

    def get_queryset(self):
        return None


class AdminView(generic.ListView):
    template_name = 'Schedule/AppointmentList-Admin.html'

    def get_queryset(self):
        return None


class ReceptionistHome(generic.ListView):
    template_name = 'Schedule/Home-Receptionist.html'

    def get_queryset(self):
        return None


class AdminHome(generic.ListView):
    template_name = 'Schedule/Home-Adminstrator.html'

    def get_queryset(self):
        return None


class AdminReports(generic.ListView):
    template_name = 'Schedule/ReportPage-Admin.html'

    def get_queryset(self):
        return None


class ReceptionistReports(generic.ListView):
    template_name = 'Schedule/ReportPage-Receptionist.html'

    def get_queryset(self):
        return None


class AdminMissedAppointments(generic.ListView):
    template_name = 'Schedule/MissedAppointments-Admin.html'

    def get_queryset(self):
        return None


class ReceptionistMissedAppointments(generic.ListView):
    template_name = 'Schedule/MissedAppointments-Receptionist.html'

    def get_queryset(self):
        return None


class AdminCallBack(generic.ListView):
    template_name = 'Schedule/CallBack-Admin.html'

    def get_queryset(self):
        return None


class ReceptionistCallBack(generic.ListView):
    template_name = 'Schedule/CallBack-Receptionist.html'

    def get_queryset(self):
        return None


class AdminAppointmentReminder(generic.ListView):
    template_name = 'Schedule/AppointmentReminder-Admin.html'

    def get_queryset(self):
        return None


class ReceptionistAppointmentReminder(generic.ListView):
    template_name = 'Schedule/AppointmentReminder-Receptionist.html'

    def get_queryset(self):
        return None


class AdminRegister(View):
    template_name = 'Schedule/AddUser-Adminstrator.html'

    def get(self, request):
        pass

    def post(self, request):
        pass