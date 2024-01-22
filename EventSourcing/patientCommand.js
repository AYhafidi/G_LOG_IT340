const eventStore = require("./eventStore")
const patientCommandDAO = require("./patientCommandDAO")

let id = 1;

function addPatient(lastName, firstName){
    payload = {lastName : lastName, firstName: firstName}
    let date = new Date()
    eventStore.addEvent("patientAdded", id++ , payload, date)
    patientCommandDAO.insertPatient({id:id, ...payload, creationDate:date})
}


function restorePatient(id){
    let Events =  eventStore.getPatientEvents(id)
    let patient;
    Events.forEach(event=>{
        switch (event.name){
            case "patientAdded":
                patient = {...event.payload, id : id, creationDate:event.creationDate}
                break;
            case "patientSaved":
                patient.firstName = event.payload.firstName
                patient.lastName = event.payload.lastName
                break;
                
        }
    })
    return patient;
}

function savePatient(id, lastName, firstName){
    let patient = restorePatient(id)
    if (patient){
        payload = {lastName : lastName, firstName: firstName};
        eventStore.addEvent("patientSaved", id , payload);
        patientCommandDAO.updatePatient({id : id, ...payload, creationDate: patient.creationDate})
    }
}


module.exports = {addPatient, restorePatient, savePatient}