const registerFunctions = require('../sources/functions/1 - register')
const checkoutFunctions = require('../sources/functions/2 - checkout')

module.exports = {
    beforeEach: browser => {},
    after: browser => {
        browser.end()
    },
    'Registration': browser => registerFunctions.register(browser),
    'Checkout': browser => checkoutFunctions.checkOut(browser),
}