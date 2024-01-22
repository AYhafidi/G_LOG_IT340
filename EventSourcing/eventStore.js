const Event = require("./event")

let eventList = []

function addEvent(name, patientID, payload, date){
    eventList.push(new Event(name, patientID, payload, date))
}

function getPatientEvents( id ){
    return eventList.filter(event => event.patientID==id)
}
module.exports = {addEvent, getPatientEvents}