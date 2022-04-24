//Linear Big O
function LinearFunc(arr) {
    for (let i in arr)
        console.log(1000 * 100000) // O(1) Constant
    let something = (20000 + 450000)
    console.log(something)
}
// O(1) Constant are superseded by higher order functions so algo is O(n)
// ################################# 

// O(log n) Logarithmic
// A logarithm is the power a number must be raised to get another number - n^y = k
// Usually in CS the base is always 2. So to get O(log 8) - log2^8 -> 2^x = 8 -> Log base 2 of 8 is 3 (log2^8=3)

//Recursive Log n
function LogFunc(n) {
    if (n === 0) return "Done";
    n = Math.floor(n / 2); //Will call itself x times before loop ends so -> log n
    return LogFunc(n);
}
//Iterative Log n
function LogIter(n) {
    while (n > 1) {
        n = Math.floor(n / 2) // Will be x iterations before loops ends so -> Log n
    }
}



// O(n) Linear

// O(n log n) Linearithmic
function nLogNFunc(n) {
    let y = n;
    while (n > 1) {
        n = Math.floor(n / 2); // O(log n)
        for (let i in y) {
            console.log(i) // O(n)
        }
    }
}
// for n = 4
//O(log n) -> O(log 2^4) -> Log 2^4 = 2
//O(n log n) -> O(n * log n) -> O( 4 * 2)

// O(n^2) Quadratic
function square(n) {
    for (let i in n) {
        for (let j in n) {
            console.log(i, j) // log cell within square matrix 
        }
    }
}
// Area of sq H*W which is same # of operations required. So that's why O(n^2)

// ################################# 

// O(n^3) Cubic
function square(n) {
    for (let i in n) {
        for (let j in n) {
            for (let k in n) {
                console.log(i, j) // log cell within cube matrix
            }
        }
    }
}
// Area of sq H*W*L which is same # of operations required. So that's why O(n^3)

// O(2^n) Exponential

// O(n!) Factorial