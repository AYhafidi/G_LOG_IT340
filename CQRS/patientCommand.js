const patientCommandDAO = require("./patientCommandDAO")
const patientQueryDAO = require("./patientQueryDAO")
const patientObject = require("./patient")
const cache = require("./cache")

function addPatient(lastName, firstName){
    let patient = new patientObject.Patient(lastName, firstName);
    patientCommandDAO.insertPatient(patient);
    let clone = {...patient}
    clone.name = clone.lastName +" "+ clone.firstName;
    cache.patientCache[patient.id] = clone
    
}

function savePatient(id, lastName, firstName){
    let patient = patientQueryDAO.getPatientByID(id);
    patient.lastName = lastName;
    patient.firstName = firstName;
    patientCommandDAO.updatePatient(patient)
    let clone = {...patient}
    clone.name = clone.lastName +" "+ clone.firstName;
    cache.patientCache[patient.id] = clone
}

module.exports = {addPatient, savePatient}