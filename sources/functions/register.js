const data = require('../data')

/**
 * Clears an input field, sets an assigned value, and verifies the value.
 * @param {object} page the homepage
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
 * Registers an account with an email address.
 * @param {object} browser The Nightwatch object
 */
let register = browser => {
    let myAccountPage = browser.page.myAccountPage()
    myAccountPage.navigate()
    myAccountPage.waitForElementVisible('@createAccountButton', 5000)

    //"Invalid email address" error
    myAccountPage
        .click('@createAccountButton')
        .waitForElementVisible('@createAccountError', 3000)
        .verify.element('@createAccountErrorLine').text.to.equal(data.registration.invalidEmailError)
}

module.exports = {
    register: register,
}