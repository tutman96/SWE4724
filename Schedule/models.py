from __future__ import unicode_literals

from django.db import models
from Accounts.models import Employee
from django.core.urlresolvers import reverse


class Schedule(models.Model):
    scheduleID = models.PositiveIntegerField(primary_key=True)
    dayOfWeek = models.DateField()
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    employeeID = models.ForeignKey(Employee)


class Prescription(models.Model):
    prescriptionID = models.PositiveIntegerField(primary_key=True)
    prescriptionTxt = models.TextField()
    printTime = models.DateTimeField()
    employeeID = models.ForeignKey(Employee)
    createdTime = models.DateTimeField()
    prescriptionTitle = models.CharField(max_length=250)


class Diagnoses(models.Model):
    diagnosesID = models.PositiveIntegerField(primary_key=True)
    diagnosesName = models.TextField()
    diagnosesDateBegin = models.DateTimeField()
    diagnosesDateEND = models.DateTimeField()
    diagnosesSeverity = models.PositiveIntegerField()


class Patient(models.Model):
    patientID = models.PositiveIntegerField(primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    middleI = models.CharField(max_length=1, null=True)
    dob = models.DateField()
    gender = (
        ("M", "Male"),
        ("F", "Female"),
    )
    gender = models.CharField(max_length=1, choices=gender, default="M", null=False)
    fileKey = models.CharField(max_length=30, null=True)
    maritalStat = models.CharField(max_length=30, null=True)
    phone = models.PositiveIntegerField( null=True)
    occupation = models.CharField(max_length=100)
    email = models.EmailField()
    mailingAdd = models.CharField(max_length=250)
    children = models.PositiveIntegerField()
    medicalHistory = models.TextField()

    def get_absolute_url(self):
        return reverse('patients:details', kwargs={'pk':self.pk})


class Notes(models.Model):
    noteID = models.PositiveIntegerField(primary_key=True)
    patientID = models.ForeignKey(Patient, on_delete=models.CASCADE)
    noteText = models.TextField(max_length=1000)

    def get_absolute_url(self):
        return reverse('patients:details', kwargs={'pk':self.pk})


class Appointment(models.Model):
    appointmentID = models.PositiveIntegerField(primary_key=True)
    patientID = models.ForeignKey(Patient)
    employeeID = models.ForeignKey(Employee)
    scheduledDate = models.DateField()
    scheduledTime = models.DateTimeField()
    notes = models.TextField()
    checkinTime = models.DateTimeField()
    checkoutTime = models.DateTimeField()
    appointmentStart = models.DateTimeField()
    appointmentEnd = models.DateTimeField()