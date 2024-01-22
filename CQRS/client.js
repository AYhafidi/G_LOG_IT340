const patientCommand = require("./patientCommand")
const patientQuery = require("./patientQuery")


// Commands

patientCommand.addPatient("Hafidi", "Aymane")
patientCommand.addPatient("Hafidi", "Aymane")
patientCommand.savePatient(1, "Toub", "Anass")

// Query

console.log(patientQuery.getPatientList())
console.log(patientQuery.getPatient(0))