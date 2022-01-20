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