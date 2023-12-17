function fib(number) {
    const array = [];

    for(let i = 0; i < number; i++) {
        if(i === 0) {
            array[i] = 1;
        }
        if(i === 1) {
            array[i] = 1;
        }

        array[i] = array[i - 1] + array[i - 2]; 

        return array[number];
    }

    
}

console.log(fib(2));