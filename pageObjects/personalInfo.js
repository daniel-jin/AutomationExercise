module.exports = {

    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',

    elements: {
        titleMrRadioInput: 'input[id="id_gender1"]',
        titleMrsRadioInput: 'input[id="id_gender2"]',
        firstNameInput: 'input[id="customer_firstname"]',
        lastNameiNput: 'input[id="customer_lastname"]',
        emailInput: 'input[id="email"]',
        passwordInput: 'input[id="passwd"]',
        dobDaySelect: 'select[id="days"]',
        dobFirstofMonth: {
            selector: '(//*[@id="days"]/)/option[2]',
            locateStrategy: 'xpath'
        },
        dobMonthSelect: 'select[id="months"]',
        dobYearSelect: 'select[id="years"]',
    }

}