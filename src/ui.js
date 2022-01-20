const multiplicationDisplay = () => {
    const a = document.querySelectorAll("#multiplication > input")[0].value
    const b = document.querySelectorAll("#multiplication > input")[1].value

    if(a === "" || b === "") return

    multiplication(a, b)
}

const lessThanDisplay = () => {
    const a = document.querySelectorAll("#a_less_than_b > input")[0].value
    const b = document.querySelectorAll("#a_less_than_b > input")[1].value

    if(a === "" || b === "") return

    const result = lessThan(a, b)

    console.log(result)
}