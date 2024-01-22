const database = require("./database")

function insertPatient(patient){
    database.patients.push(patient)
    let clone = {...patient}
    delete clone.creationDate
    database.patientList.push(clone)
}



function updatePatient(patient){
    database.patientList.forEach(_patient =>{
        if (_patient.id == patient.id){
            let clone = {...patient}
            delete clone.creationDate
            return clone;
        }
        return _patient;
    } )

    database.patients.forEach(_patient =>{
        if (_patient.id == patient.id){
            return patient;
        }
        return _patient;
    } )
}


module.exports = {insertPatient, updatePatient}