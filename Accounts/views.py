from django.views import generic
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from django.http import Http404
from .forms import UserForm
from models import Employee
from Schedule import views as Schedviews

userAccess = 'R'


class IndexView(generic.ListView):
    template_name = 'Accounts/login.html'

    def get_queryset(self):
        return None



class UserFormView(View):
    form_class = UserForm
    template_name = 'Accounts/registration_form.html'

    # display blank form
    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form': form})

    # process form data
    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():
            user = form.save(commit=False)

            # cleaned (normalized) data
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()

            # returns User objects if credentials are correct
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('Accounts:home')

        return render(request, self.template_name, {'form':form})


class LoginAccess(View):
    def determineAccess(self, employee):
        userAccess = employee.access
        if userAccess == 'R':
            redirect(Schedviews.ReceptionistView)
        elif userAccess == 'P':
            redirect(Schedviews.PractionerView)
        elif userAccess == 'A':
            redirect(Schedviews.AdminView)
        else:
            Http404("Access Level Error Occured ")

    def determineAccess(self):
        if userAccess == 'R':
            redirect(Schedviews.ReceptionistView)
        elif userAccess == 'P':
            redirect(Schedviews.PractionerView)
        elif userAccess == 'A':
            redirect(Schedviews.AdminView)
        else:
            Http404("Access Level Error Occured ")



def validateLogin(request):
    email = request.GET.get('email', None)
    password = request.GET.get('password', None)
    try:
        employee = Employee.objects.get(employee__email=email)
    except Employee.DoesNotExist:
        employee = None
    else:
        employee = None

    if employee:
        if password == employee.password:
            redirect(LoginAccess, employee)
        else:
            Http404("as planned")
    Http404("No user")





