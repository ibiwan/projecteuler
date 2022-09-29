const primes = (() => {
    let largestChecked = 2
    let 
})();


const tgt = process.argv[2];




let sum = 0;

const _fib = { 0: 0, 1: 1 };
const fib = i => {
    if (i in _fib) return _fib[i];
    a = fib(i - 1);
    b = fib(i - 2);
    _fib[i] = a + b;
    return _fib[i];
};

let i = 0;
while (true) {
    let f = fib(i);
    if (f >= max) break;
    if (!(f % 2)) {

        sum += f;
    }
    i += 1;
}

console.log(sum);
