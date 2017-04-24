from django.views import generic
from .models import Patient


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
    template_name = 'Schedule/Home-Administrator.html'

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


class ReceptionistAddPatient(generic.ListView):
    template_name = 'Schedule/AddUsers-Receptionist.html'

    def get_queryset(self):
        return None


class ReceptionistPatientView(generic.ListView):
    template_name = 'Schedule/PatientProfile-Receptionist.html'

    def get_queryset(self):
        return None


class ReceptionistPatientsView(generic.ListView):
    template_name = 'Schedule/PatientProfiles-Receptionist.html'

    def get_queryset(self):
        return Patient.objects.all()


class AdminRegister(generic.ListView):
    template_name = 'Schedule/AddUser-Adminstrator.html'

    def get_queryset(self):
        return None