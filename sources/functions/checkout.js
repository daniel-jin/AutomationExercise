const data = require('../data')

/**
 * Clears an input field, sets an assigned value, and verifies the value.
 * @param {object} page the page
 * @param {string} element the element to input value into
 * @param {string} data input data for the field
 */
let setInputValue = (page, element, data) => {
    page
        .clearValue(element)
        .setValue(element, data)
        .verify.value(element, data)
}

/**
 * Picks a dress and goes through the checkout process.
 * Confirms the order after checkout.
 * @param {object} browser The Nightwatch object
 */
let checkOut = browser => {
    
}


module.exports = {
    checkOut: checkOut,
}