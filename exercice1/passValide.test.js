const passValide = require("./passValide")


const rules = {
    "minLength" : 8,
    "charLength" : 1,
    "digitLength" : 1,
    "SpecialChars" : /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
}


describe("Password validation", () => {
    test("check an empty password", () => {
      expect(passValide("", rules)).toBeFalsy();
        });
    test("check an undefined password", () => {
        expect(passValide(undefined, rules)).toBeFalsy();
        });
    test("check short password ", () => {
        expect(passValide("Aym", rules)).toBeFalsy();
        });
    test("check password without numbers", () => {
        expect(passValide("Aymane*-", rules)).toBeFalsy();
        });
    test("check password without characters", () => {
        expect(passValide("12344*-56", rules)).toBeFalsy();
        });
    test("check password without special characters", () => {
        expect(passValide("Aymane123", rules)).toBeFalsy();
        });
    
    test("check password respects all rules 'Aymane123*_' ", () => {
        expect(passValide("Aymane123*_", rules)).toBeTruthy();
        });

});

