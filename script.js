let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'



const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

// const inputNumber = (number) => {
//     currentNumber = number
// }

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
const numbers = document.querySelectorAll(".number")
// console.log(numbers)

numbers.forEach((number) => {
    // console.log(number)
    number.addEventListener("click", (event) => {
        // console.log("number is presesed")
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
// const inputNumber = (number) => {
//     currentNumber += number
// }

const inputOpertor =(operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOpertor(event.target.value)
    })
} ) 

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = '' 
    switch(calculationOperator) {
        case '+':
             result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        case '%':
            result = prevNumber /= 100
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    // console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})




