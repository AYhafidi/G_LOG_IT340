const BT = require("./bankTransfer")
const DAO = require("./bankDAO")

function transferMoney(accountId, amount){
    return BT.transfer(accountId, amount)
        .then(()=> DAO.debitAccount(accountId, amount))
        .catch((e) => console.log(e) )
}

module.exports = transferMoney