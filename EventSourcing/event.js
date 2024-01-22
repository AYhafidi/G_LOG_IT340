
class Event{
    constructor(name, patientID, payload, creationDate){
        this.name = name
        this.patientID = patientID
        this.payload = payload
        this.creationDate = creationDate
    }
}

module.exports = Event