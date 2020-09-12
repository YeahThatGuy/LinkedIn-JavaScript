// Functions as first-class citizens
const calc = () => {
    return 4 * 4;
}

// let aNumber = calc();

// console.log(aNumber);

// Callback example
const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);