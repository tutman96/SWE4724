from django.conf.urls import url
from . import views

app_name = 'Accounts'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='login'),

    url(r'^register/$', views.UserFormView.as_view(), name='register'),

    url(r'^loginRequest/$', views.LoginAccess.as_view(), name='request'),

    url(r'^loginValidate/$', views.LoginValidate.as_view(), name='validate'),

    url(r'^receptionist/$', views.ReceptionistView.as_view(), name='receptionist'),

    url(r'^practitioner/$', views.PractionerView.as_view(), name='practitioner'),

    url(r'^admin/$', views.AdminView.as_view(), name='admin'),

]
