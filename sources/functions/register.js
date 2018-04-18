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
    setInputValue(myAccountPage, '@emailCreateInput', data.registration.validEmailAddress2)
    myAccountPage
        .click('@createAccountButton')

    // You are now on the Personal Informatino page.
    let personalInfoPage = browser.page.personalInfoPage();
    personalInfoPage.waitForElementVisible('@registerButton', 5000)

    // Attempt to register with no data in any fields
    // You should get 9 errors for the form.
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.nineErrorsText)

    // Enter first name and attemp to register - should result in 8 errors.
    personalInfoPage
        .click('@titleMrRadioInput')
    setInputValue(personalInfoPage, '@firstNameInput', data.registration.firstName)
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.eightErrorsText)
    
    // Enter last name and attemp to register - should result in 7 errors.
    setInputValue(personalInfoPage, '@lastNameInput', data.registration.lastName)
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.sevenErrorsText)

    // Enter invalid email and attempt to register
    setInputValue(personalInfoPage, '@emailInput', data.registration.invalidEmailAddress)
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        // Make sure the error states that the email is invalid (instead of the "required" error for no email provided)
        .expect.element('@errorText').text.to.contain("invalid")
    
    // Enter valid email address and attempt to register - should result in 6 errors.
    setInputValue(personalInfoPage, '@emailInput', data.registration.validEmailAddress)
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.sixErrorsText)

    // Enter invalid password (less than 5 characters) into Password field and register
    setInputValue(personalInfoPage, '@passwordInput', data.registration.invalidPassword)
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        // Make sure the error states that the password is invalid (instead of the "required" error for no password provided)
        .expect.element('@errorText').text.to.contain("invalid")

    // Enter valid password and attempt to register - should result in 5 errors.
    setInputValue(personalInfoPage, '@passwordInput', data.registration.validPassword)
    personalInfoPage
        .click('registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.fiveErrorsText)

    // Fill in password again (it gets cleared), then fill in DOB
    setInputValue(personalInfoPage, '@passwordInput', data.registration.validPassword)
    personalInfoPage
        .click('@dobDaySelect')
        .waitForElementVisible('@dobFirstofMonth', 2000)
        .click('@dobFirstofMonth')
        .click('@dobMonthSelect')
        .waitForElementVisible('@januaryOption', 2000)
        .click('@januaryOption')
        .click('@dobYearSelect')
        .waitForElementVisible('@dobYear1987Option', 2000)
        .click('@dobYear1987Option')
    
    // Sign up for newsletter & opt in for offers
    personalInfoPage
        .click('@newsletterInput')
        .click('@specialOffersiNput')
    
    // Verify that Address first & last name are already filled in
    personalInfoPage
        .expect.element('@addressFirstNameInput').text.to.equal(data.registration.firstName)
        .expect.element('@addressLastNameInput').text.to.equal(data.registration.lastName)
}


module.exports = {
    register: register,
}