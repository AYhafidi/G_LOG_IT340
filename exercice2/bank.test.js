const DAO =  require("./bankDAO")
const getBalance = require("./bank")

// une autre méthode on peut utiliser celle là au lieu de jest.spyOn(DAO, "retrieveBalance")
jest.mock("./bankDAO", ()=>({
    retrieveBalance : jest.fn((accountID) => 200), 
}))

describe('retrieveBalance', () => {
    test("vérifier si la fonction retrieveBalance est appelé sans affiché de message dans le console", ()=>{

        getBalance()

        expect(DAO.retrieveBalance).toHaveBeenCalled();
    })

    test("vérifier si la fonction retrieveBalance est appelé avec le account_ID passer à la fonction get_balance", ()=>{

        getBalance(2)

        expect(DAO.retrieveBalance).toHaveBeenCalledWith(2);
    })

    test("retourner la valeur renvoyer par la fonction retrieveBalance", ()=>{
        const solde = getBalance("AYMANE");
        expect(DAO.retrieveBalance).toHaveBeenCalledWith("AYMANE");
        expect(solde).toEqual(200);
    })
})
