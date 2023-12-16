const palindromes = function (string) {
    let text = string.replace(/[,.!?]/g, "").replace(/ /g, "").toLowerCase();
    let newString = text.split("").reverse().join("");

    if(text === newString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
