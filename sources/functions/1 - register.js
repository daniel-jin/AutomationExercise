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
    let authenticationPage = browser.page.authentication();
    authenticationPage.navigate()
    authenticationPage.waitForElementVisible('@createAccountButton', 10000)

    // "Invalid email address" error - null value for email address
    authenticationPage
        .click('@createAccountButton')
        .waitForElementVisible('@createAccountError', 3000)
        .expect.element('@createAccountErrorLine').text.to.equal(data.registration.invalidEmailError)

    // "Invalid email address" error - invalid email address format
    setInputValue(authenticationPage, '@emailCreateInput', data.registration.invalidEmailAddress)
    authenticationPage
        .click('@createAccountButton')
        .waitForElementVisible('@createAccountError', 3000)
        .expect.element('@createAccountErrorLine').text.to.equal(data.registration.invalidEmailError)

    // Enter valid email address
    setInputValue(authenticationPage, '@emailCreateInput', data.registration.validEmailAddress3)
    authenticationPage
        .click('@createAccountButton')

    // You are now on the Personal Informatino page.
    let personalInfoPage = browser.page.personalInfo();
    personalInfoPage.waitForElementVisible('@registerButton', 5000)

    // Attempt to register with no data in any fields
    // You should get 8 errors for the form.
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 10000)
        .expect.element('@errorHeader').text.to.equal(data.registration.eightErrorsText)

    // Enter first name and attemp to register - should result in 7 errors.
    personalInfoPage
        .click('@titleMrRadioInput')
    setInputValue(personalInfoPage, '@firstNameInput', data.registration.firstName)
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.sevenErrorsText)
    
    // Enter last name and attemp to register - should result in 6 errors.
    setInputValue(personalInfoPage, '@lastNameInput', data.registration.lastName)
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.sixErrorsText)

    // Enter invalid email and attempt to register
    setInputValue(personalInfoPage, '@emailInput', data.registration.invalidEmailAddress)
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .waitForElementVisible('@errorText', 3000)
        // Make sure the error states that the email is invalid (instead of the "required" error for no email provided)
        .expect.element('@errorText').text.to.contain("invalid")
    
    // Enter valid email address and attempt to register - should result in 6 errors.
    setInputValue(personalInfoPage, '@emailInput', data.registration.validEmailAddress3)
    browser.pause(2000)
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .waitForElementVisible('@errorHeader', 3000)
        .expect.element('@errorHeader').text.to.equal(data.registration.sixErrorsText)

    // Enter invalid password (less than 5 characters) into Password field and register
    setInputValue(personalInfoPage, '@passwordInput', data.registration.invalidPassword)
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 5000)
        // Make sure the error states that the password is invalid (instead of the "required" error for no password provided)
        .expect.element('@errorText').text.to.contain("invalid")

    // Enter valid password and attempt to register - should result in 5 errors.
    setInputValue(personalInfoPage, '@passwordInput', data.registration.validPassword)
    personalInfoPage
        .click('@registerButton')
        .waitForElementVisible('@errorBox', 5000)
        .expect.element('@errorHeader').text.to.equal(data.registration.fiveErrorsText)
    
    // Re-enter valid password
    setInputValue(personalInfoPage, '@passwordInput', data.registration.validPassword)

    // Sign up for newsletter & opt in for offers
    personalInfoPage
        .click('@newsletterInput')
        .click('@specialOffersInput')
    
    // Fill in Address section
    setInputValue(personalInfoPage, '@addressFirstNameInput', data.registration.firstName)
    setInputValue(personalInfoPage, '@addressLastNameInput', data.registration.lastName)
    setInputValue(personalInfoPage, '@addressLine1', data.registration.addressLine1)
    setInputValue(personalInfoPage, '@addressCityInput', data.registration.addressCity)
    setInputValue(personalInfoPage, '@addressZipInput', data.registration.addressZip)

    personalInfoPage.click('@addressStateSelect',()=>{
        personalInfoPage.click('@addressStateNYOption');
      });

    setInputValue(personalInfoPage, '@mobilePhoneInput', data.registration.mobilePhone)
    setInputValue(personalInfoPage, '@addressAliasInput', data.registration.addressAlias)

    // Register, confirm that you are navigated to the My Account page
    personalInfoPage.click('@registerButton')

    let myAccountPage = browser.page.myAccount();
    myAccountPage.navigate();
    myAccountPage
        .waitForElementVisible('@navigationPage', 5000)
        .expect.element('@navigationPage').text.to.equal("My account")
}


module.exports = {
    register: register,
}