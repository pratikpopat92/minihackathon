function factorial(n) {
    let fact = 1, numOfZeroes = 0;
    for (let i = n; i >= 1; --i) {
        fact *= i;
    }
    fact = BigInt(fact);
    fact = fact.toString();
    for (let i = fact.length - 1; i >= 0; --i) {
        if (parseInt(fact[i]) === 0) {
            ++numOfZeroes;
        } else {
            break;
        }
    }
    console.log(fact);
    return numOfZeroes;
}
console.log(factorial(12));