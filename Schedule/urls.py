from django.conf.urls import url
from . import views

app_name = 'Schedule'

urlpatterns = [


    url(r'^receptionist/$', views.ReceptionistView.as_view(), name='receptionist'),

    url(r'^practitioner/$', views.PractitionerView.as_view(), name='practitioner'),

    url(r'^admin/$', views.AdminView.as_view(), name='admin'),

    url(r'^admin/register/$', views.AdminRegister.as_view(), name='register'),

    url(r'^receptionist/home/$', views.ReceptionistHome.as_view(), name='rhome'),

    url(r'^admin/home/$', views.AdminHome.as_view(), name='ahome'),

    url(r'^admin/callback/$', views.AdminCallBack.as_view(), name='acallback'),

    url(r'^receptionist/callback/$', views.ReceptionistCallBack.as_view(), name='rcallback'),

    url(r'^admin/reports/$', views.AdminReports.as_view(), name='areports'),

    url(r'^receptionist/reports/$', views.ReceptionistReports.as_view(), name='rreports'),

    url(r'^admin/MissedAppointments/$', views.AdminMissedAppointments.as_view(), name='amissed'),

    url(r'^receptionist/MissedAppointments/$', views.ReceptionistMissedAppointments.as_view(), name='rmissed'),

    url(r'^receptionist/AppointmentReminder/$', views.ReceptionistAppointmentReminder.as_view(), name='rreminder'),

    url(r'^admin/AppointmentReminder/$', views.AdminAppointmentReminder.as_view(), name='areminder'),

    url(r'^receptionist/NewPatient/$', views.ReceptionistAddPatient.as_view(), name='raddpatient'),

    url(r'^receptionist/PatientView/$', views.ReceptionistPatientView.as_view(), name='rpatient'),

    url(r'^receptionist/PatientsList/$', views.ReceptionistPatientsView.as_view(), name='rpatients'),

]
