const DAO = require("./bankDAO")


function getBalance(accountId){
    let solde = DAO.retrieveBalance(accountId);
    return solde
}

module.exports = getBalance