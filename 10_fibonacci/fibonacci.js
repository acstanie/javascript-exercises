const fibonacci = function(value) {
    let number = Number.parseInt(value);
    let firstVal = 0;
    let secondVal = 1;
    let newVal; 

    if(number < 0) {
        return "OOPS";
    }

    for(let i = 0; i < number; i++) { 
        if(i === number - 1) {
            return newVal
        }

        newVal = firstVal + secondVal;
        firstVal = secondVal;
        secondVal = newVal;        
    }
};

// Do not edit below this line
module.exports = fibonacci;
