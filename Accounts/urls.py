from django.conf.urls import url
from . import views

app_name = 'Accounts'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='login'),

    url(r'^register/$', views.UserFormView.as_view(), name='register'),

    url(r'^dashboard/$', views.DashboardView.as_view(), name='home'),

    url(r'^loginRequest$', views.LoginRequestView.as_view(), name='request')


]
