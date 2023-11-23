let string = "";

const reverseString = function(string) {
    stringArray = string.split("");
    reverseArray = stringArray.reverse();
    result = reverseArray.join("");

    return result;
};

// Do not edit below this line
module.exports = reverseString;