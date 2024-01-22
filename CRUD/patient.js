
class Patient{
    static Id = 0
    constructor(lastName, firstName){
        this.id = Patient.Id++;
        this.lastName = lastName;
        this.firstName = firstName;
        this.creationDate =  new Date();
    }

}

module.exports = { Patient }