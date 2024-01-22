const patientService = require("./patientService")



patientService.addPatient("Hafidi", "Aymane")
patientService.addPatient("Hafidi", "Aymane")
patientService.addPatient("Hafidi", "Aymane")


//patientService.getPatientList()


patientService.savePatient(1, "Toub", "Anass")


console.log(patientService.getPatient(1))
console.log(patientService.getPatient(2))