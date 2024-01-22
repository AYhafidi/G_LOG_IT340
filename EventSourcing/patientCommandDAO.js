const database = require("./database")
const cache = require("./cache")

async function insertPatient(patient){
    // PatientList without Creation Date
    let clone = {...patient}
    delete clone.creationDate
    database.patientList.push(clone)

    // Cache list with adding name
    cache.patientCache[patient.id] = {...patient, name: patient.lastName + " " + patient.firstName}

}



async function updatePatient(patient){
    database.patientList.forEach(_patient =>{
        if (_patient.id == patient.id){
            cache.patientCache[patient.id] = {...patient, name: patient.lastName + " " + patient.firstName}
            return patient;
        }
        return _patient;
    } )
}



module.exports = {insertPatient, updatePatient}