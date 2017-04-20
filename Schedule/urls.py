from django.conf.urls import url
from . import views

app_name = 'Schedule'

urlpatterns = [


    url(r'^receptionist/$', views.ReceptionistView.as_view(), name='receptionist'),

    url(r'^practitioner/$', views.PractionerView.as_view(), name='practitioner'),

    url(r'^admin/$', views.AdminView.as_view(), name='admin'),

    url(r'^admin/register$', views.AdminRegister.as_view(), name='register'),


]
