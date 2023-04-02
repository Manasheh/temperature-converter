

const celsiusEl = document.querySelector('#celsius')
const fahrenheitEl = document.querySelector('#fahrenheit')
const kelvinEl = document.querySelector('#kelvin')

function computeTemp(event) {
    const currentValue = +event.target.value
    switch (event.target.name) {
        case 'kelvin':
            fahrenheitEl.value = ((currentValue - 273.15) * (9 / 5) + 32).toFixed(3)
            celsiusEl.value = (currentValue - 273.15).toFixed
            break;
        case 'fahrenheit':
            celsiusEl.value = ((currentValue - 32.0) * (5 / 9)).toFixed(3)
            kelvinEl.value = ((currentValue - 32) * (5 / 9) + 273.15).toFixed(3);
            break;
        case 'celsius':
            fahrenheitEl.value = ((currentValue * (9.0 / 5.0)) + 32.0).toFixed(3);
            kelvinEl.value = (currentValue + 273.15).toFixed(3);
            break;
        default:
            break;
    }
}


