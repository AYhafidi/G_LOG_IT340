const patientCommand = require("./patientCommand")


patientCommand.addPatient("Hafidi", "Aymane")
patientCommand.addPatient("Hafidi", "Aymane")
patientCommand.addPatient("Hamdaoui", "Yasmine")


patientCommand.savePatient(2, "toub", "anas")


console.log(patientCommand.restorePatient(1))
console.log(patientCommand.restorePatient(2))
console.log(patientCommand.restorePatient(3))