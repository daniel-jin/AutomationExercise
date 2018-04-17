const functions = require('../sources/functions')

module.exports = {
    beforeEach: browser => {},
    after: browser => {
        browser.end()
    },
    'Registration': browser => functions.register(browser),
}