

s = Schedule()
s.startTime = datetime.datetime(2017, 1, 5, 11, 0, 0)
s.endTime = datetime.datetime(2017, 1, 5, 12, 0, 0)
s.employeeID = e

a = Appointment()
a.patientID = p
a.employeeID = e
a.scheduledDate = datetime.datetime(2017, 1, 5)
a.scheduledTime = datetime.datetime(2017, 1, 5, 10, 0, 0)
a.notes = "testing"
a.checkinTime = datetime.datetime(2017, 1, 5, 10, 1, 0)
a.checkoutTime = datetime.datetime(2017, 1, 5, 10, 59, 0)
a.appointmentStart = datetime.datetime(2017, 1, 5, 10, 5, 0)
a.appointmentEnd = datetime.datetime(2017, 1, 5, 10, 55, 0)

pres = Prescription()
pres.prescriptionTxt = "Advil"
pres.printTime = datetime.datetime(2017, 4, 4, 10, 12, 23)
pres.employeeID = e
pres.createdTime = datetime.datetime(2017, 4, 4, 10, 0, 1)
pres.prescriptionTitle = "400 ml Advil"
pres.save()

n = Notes()
n.patientID = p
n.noteText = "Text will go here for a patient in an appointment"

d = Diagnoses()
d.diagnosesName = "Lung Cancer"
d.diagnosesDateBegin = datetime.datetime(2017, 1, 1)
d.diagnosesDateBegin = datetime.datetime(2017, 1, 1)
d.diagnosesSeverity = 100
d.save()

p = Patient()
p.firstName = "David"
p.lastName = "Potter"
p.middleI = "R"
p.dob = datetime.datetime(1994, 7, 15)
p.gender = "M"
p.maritalStat = "Single"
p.phone = 4048953245
p.occupation = "Software Engineer"
p.email = "pottersoccer2@gmail.com"
p.mailingAdd = "4400 Huntington Circle, Dunwoody GA 30338"
p.children = 0
p.save()

