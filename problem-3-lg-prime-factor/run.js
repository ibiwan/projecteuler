const makePrimer = () => {
    let largestChecked = 2;
    const knownPrimes = {
        2: 2
    };
    const ithPrime = (i) => {
        for (let k = 1; Object.keys(knownPrimes).length < i; k++) {
            isPrime(k);
        }
        return Object.entries(knownPrimes)[i - 1][0];
    };
    function isPrime(n) {
        if (n < 2) {
            return false;
        }
        if (n in knownPrimes) {
            return true;
        }
        if (n <= largestChecked) {
            return false;
        }
        for (let [k, largestMultiple] of Object.entries(knownPrimes)) {
            k = Number.parseInt(k);
            while (largestMultiple < n) {
                largestMultiple += k;
            }
            knownPrimes[k] = largestMultiple;

        }
        for (let k = largestChecked + 1; k < n; k++) {
            isPrime(k);
        }
        for (const i in knownPrimes) {
            const p = knownPrimes[i];
            if (n % p == 0) {
                largestChecked = n;
                return false;
            }
        }
        largestChecked = n;
        knownPrimes[n] = n;
        return true;
    };
    const largestBelow = (max) => {

        if (isPrime(max)) {
            return max;
        }
        return knownPrimes[knownPrimes.length - 1];
    };
    const getKnownPrimes = () => knownPrimes;
    const getLowestFactor = (n) => {
        let i = 1;
        let p;
        do {
            p = Number.parseInt(ithPrime(i));
            if (!(n % p)) {
                return p;
            }
            i++;
        } while (p < Math.sqrt(n));
        return n;
    };
    const getLargestFactor = (n) => {
        const low = getLowestFactor(n);
        if (low == n) {
            return n;
        }
        return getLargestFactor(n / low);
    };
    return {
        ithPrime,
        isPrime,
        largestBelow,
        getKnownPrimes,
        getLowestFactor,
        getLargestFactor,
    };
};


const tgt = process.argv[2];

const primes = makePrimer();

console.log(tgt, primes.getLargestFactor(tgt));
