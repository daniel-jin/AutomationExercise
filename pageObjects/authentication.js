module.exports = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',

    elements: {
        emailCreateInput: 'input[id="email_create"]',
        createAccountButton: 'button[id="SubmitCreate"]',
        createAccountError: 'div[id="create_account_error"]',
        createAccountErrorLine: {
            selector: '(//*[@id="create_account_error"])/ol[1]/li[1]',
            locateStrategy: 'xpath'
        },
    }
}