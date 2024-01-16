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
<<<<<<< HEAD
        const solde = getBalance("AYAMNE");
        expect(DAO.retrieveBalance).toHaveBeenCalledWith("AYAMNE");
=======
        const solde = getBalance("AYMANE");
        expect(DAO.retrieveBalance).toHaveBeenCalledWith("AYMANE");
>>>>>>> 3015c352bf2dc05606a90b079e17936c48df0b1b
        expect(solde).toEqual(200);
    })
})
