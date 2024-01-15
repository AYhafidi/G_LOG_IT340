
function isLengthValide(password, longueur){
    return password.length >= longueur;
}

function isDigitNumberValide(password, digitNumber){
    let digitRegex = /[0-9]/g;
    let passMatch = password.match(digitRegex);
    if (passMatch !== null && passMatch.length>= digitNumber){
        return true
    }
    return false

}

function isCharNumberValide(password, charNumber){
    let charRegex = /[a-zA-Z]/g;
    let passMatch = password.match(charRegex);
    if (passMatch !== null && passMatch.length>= charNumber){
        return true
    }
    return false
}

function isSpecialCharExist(password, SpecialChars){
    let passMatch = password.match(SpecialChars);
    if (passMatch !== null && passMatch.length> 0){
        return true
    }
    return false

}



function passValide(password, rules){
    if (password 
        && password!==null 
        && isLengthValide(password, rules.minLength)
        && isDigitNumberValide(password, rules.digitLength)
        && isCharNumberValide(password, rules.charLength)
        && isSpecialCharExist(password, rules.SpecialChars)) return true;
        return false
}

module.exports = passValide 