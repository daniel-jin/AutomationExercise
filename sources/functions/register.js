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
 * Registers an account with an email address. 
 * Checks for correct errors when invalid information is submitted to create an account.
 * @param {object} browser The Nightwatch object
 */
let register = browser => {
    let myAccountPage = browser.page.myAccount();
    myAccountPage.navigate()
    myAccountPage.waitForElementVisible('@createAccountButton', 5000)

    // "Invalid email address" error - null value for email address
    myAccountPage
        .click('@createAccountButton')
        .waitForElementVisible('@createAccountError', 3000)
        .expect.element('@createAccountErrorLine').text.to.equal(data.registration.invalidEmailError)

    // "Invalid email address" error - invalid email address format
    setInputValue(myAccountPage, '@emailCreateInput', data.registration.invalidEmailAddress)
    myAccountPage
        .click('@createAccountButton')
        .waitForElementVisible('@createAccountError', 3000)
        .expect.element('@createAccountErrorLine').text.to.equal(data.registration.invalidEmailError)

    // Enter valid email address
    setInputValue(myAccountPage, '@emailCreateInput', data.registration.validEmailAddress)
    myAccountPage
        .click('@createAccountButton')
        
}

module.exports = {
    register: register,
}