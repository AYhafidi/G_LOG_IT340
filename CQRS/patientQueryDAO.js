const database = require("./database")
const cache = require("./cache")

function retrievePatientList(){
    return  database.patientList
}

function  getPatientByID(id){
    return database.patients.find(patient => patient.id == id)
}

function retrievePatient(id){
    return cache.patientCache[id]

}


module.exports = {retrievePatientList, retrievePatient, getPatientByID}