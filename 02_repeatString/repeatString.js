let string = "";
const num = Math.floor(Math.random() * 1000);

const repeatString = function(string, num) {
    let result = "";

    if(num < 0) {
        result += "ERROR";
    } else {
        for(let i = 0; i < num; i++) {
            result += string;
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;