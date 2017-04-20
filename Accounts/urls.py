from django.conf.urls import url
from . import views

app_name = 'Accounts'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='login'),

    url(r'^register/$', views.UserFormView.as_view(), name='register'),

    url(r'^loginRequest/$', views.LoginAccess.as_view(), name='request'),

    url(r'^loginValidate/$', views.validateLogin, name='validate'),


]
