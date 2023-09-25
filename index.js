var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

//add function
function add(a, b){
    return a + b;
}

var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

//Subtract function
function subtract(a, b){
    return a- b;
}

var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

//Multiplication function
function multiply(a, b){
    return a * b;
}

var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

//Divide funtion
function divide(a, b){
    return a / b;
}

//Increment n
function increment(n){
    return n + 1;
}

//Decrement n
function decrement(a){
    return a - 1;
}

//Parses int n and returns parsed int
function makeInt(n){
    let parsed = parseInt((n.toString()), 10)
    if (isNaN(parsed)){
        return NaN;
    }
    return parsed
}

//Preserve Decimal
function preserveDecimal(n){
    let p = parseFloat(n)
    return p
}


