const registerFunctions = require('../sources/functions/register')

module.exports = {
    beforeEach: browser => {},
    after: browser => {
        //browser.end()
    },
    'Registration': browser => registerFunctions.register(browser),
}