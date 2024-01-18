const database = require("./database")

function insertPatient(patient){
    database.patients.push(patient)
}

function retrievePatientList(){
    return  database.patients.map( patient => {
        return {
            id : patient.id,
            lastName : patient.lastName,
            firstName : patient.firstName,

        }
    })
}

function  getPatientByID(id){
    return database.patients.find(patient => patient.id == id)
}

function retrievePatient(id){
    let patient = getPatientByID(id);
    patient.name = patient.lastName +" "+ patient.firstName;
    return patient
}

function updatePatient(patient){
    database.patients.forEach(_patient =>{
        if (_patient.id == patient.id){
            return patient;
        }
        return _patient;
    } )
}
module.exports = { insertPatient, retrievePatientList, getPatientByID, updatePatient, retrievePatient }