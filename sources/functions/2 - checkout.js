const data = require('../data')
const selectors = require('../selectors')

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
    let dressesPage = browser.page.dresses();
    dressesPage.navigate()

    // Pick one of the available dresses and add to cart
    dressesPage
        .waitForElementVisible('@firstItemCheckOutButton', 5000)
        .click('@firstItemCheckOutButton')
        .waitForElementVisible('@proceedToCheckOut1', 3000)
        .click('@proceedToCheckOut1')

    browser
        .waitForElementVisible(selectors.proceedToCheckOut2, 5000)
        .click(selectors.proceedToCheckOut2)
        .waitForElementVisible(selectors.proceedToCheckout3, 5000)
        .click(selectors.proceedToCheckout3)
        .waitForElementVisible(selectors.agreeToTerms, 5000)
        .click(selectors.agreeToTerms)
        .click(selectors.proceedToCheckOut4)
        // Make sure the item is in stock
        .expect.element(selectors.availabilityLabel).text.to.equal("In stock")
    
    // Pay by bank wire
    browser
        .click(selectors.payByBankWire)
        .waitForElementVisible(selectors.confirmButton, 5000)
        .click(selectors.confirmButton)
    
    // Go back to orders
    browser
        .waitForElementVisible(selectors.backToOrders, 5000)
        .click(selectors.backToOrders)
    
    // CHeck that there is a table row in the order history table
    browser
        .useXpath()
        .waitForElementVisible(selectors.firstOrderItem, 5000)
        .useCss()

}


module.exports = {
    checkOut: checkOut,
}