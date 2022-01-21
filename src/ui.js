const additionWithoutPreservingDisplay = () => {
    const a = document.querySelectorAll("#addition1 > input")[0].value
    const b = document.querySelectorAll("#addition1 > input")[1].value
    const result = document.querySelector("#addition1 > .result")

    if(a === "" || b === "") {
        result.innerHTML = ""
        return
    }

    result.innerHTML = additionWithoutPreserving(a, b)
}

const multiplicationDisplay = () => {
    const a = document.querySelectorAll("#multiplication > input")[0].value
    const b = document.querySelectorAll("#multiplication > input")[1].value
    const result = document.querySelector("#multiplication > .result")

    if(a === "" || b === "") {
        result.innerHTML = ""
        return
    }

    result.innerHTML = multiplication(a, b)
}

const lessThanDisplay = () => {
    const a = document.querySelectorAll("#a_less_than_b > input")[0].value
    const b = document.querySelectorAll("#a_less_than_b > input")[1].value
    const result = document.querySelector("#a_less_than_b > .result")

    if(a === "" || b === "") {
        result.style.backgroundColor = 'white'
        return
    }

    result.style.backgroundColor = lessThan(a, b) ? 'lightgreen' : 'salmon'
}

const lessEqualDisplay = () => {
    const a = document.querySelectorAll("#a_less_equal_b > input")[0].value
    const b = document.querySelectorAll("#a_less_equal_b > input")[1].value
    const result = document.querySelector("#a_less_equal_b > .result")

    if(a === "" || b === "") {
        result.style.backgroundColor = 'white'
        return
    }

    result.style.backgroundColor = lessEqual(a, b) ? 'lightgreen' : 'salmon'
}

const isPrimeDisplay = () => {
    const a = document.querySelectorAll("#prime_number > input")[0].value
    const result = document.querySelector("#prime_number > .result")

    if(a === "") {
        result.style.backgroundColor = 'white'
        return
    }

    result.style.backgroundColor = isPrime(a) ? 'lightgreen' : 'salmon'
}

const fiveFactorialPowerDisplay = () => {
    const result = document.querySelector("#factorial_power")

    result.innerHTML = `Fatorial = ${factorial(5)} || Potência = ${square(5)}`
}
fiveFactorialPowerDisplay()