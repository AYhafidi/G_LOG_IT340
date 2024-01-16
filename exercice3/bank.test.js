const BT =  require("./bankTransfer")
const DAO = require("./bankDAO")
const transferMoney = require("./bank")


// une autre méthode on peut utiliser celle là au lieu de jest.spyOn(DAO, "retrieveBalance")
jest.mock("./bankTransfer", ()=>({
    transfer : jest.fn()
}))

jest.mock("./bankDAO", ()=>({
    debitAccount : jest.fn(), 
}))

console.log("#####" ,BT.transfer.mockImplementation)


describe('transferMoney', () => {
    afterEach(function() {
        BT.transfer.mockClear();
        DAO.debitAccount.mockClear();
    });

    test("vérifier que l'appel de la fonction transfert est fait avec les bons paramétres", async()=>{
        
        BT.transfer.mockResolvedValueOnce(Promise.resolve())
        await transferMoney("Aymane", 200);

        expect(BT.transfer).toHaveBeenCalledWith("Aymane", 200);
    })
    test("vérifier que l'appel de la fonction transfert est fait avec les bons paramétres", async()=>{
        
        BT.transfer.mockResolvedValueOnce(Promise.resolve())
        await transferMoney("Aymane", 200);
        expect(DAO.debitAccount).toHaveBeenCalledWith("Aymane", 200);
    })

    test("vérifier que l'appel de la fonction debitAccount n'a pas été appeler",async ()=>{
        BT.transfer.mockResolvedValueOnce(Promise.reject())
        await transferMoney("Aymane", 200);
        expect(DAO.debitAccount).not.toHaveBeenCalled();
    })

})