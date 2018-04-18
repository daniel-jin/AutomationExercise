module.exports = {

    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',

    elements: {
        titleMrRadioInput: 'input[id="id_gender1"]',
        titleMrsRadioInput: 'input[id="id_gender2"]',
        firstNameInput: 'input[id="customer_firstname"]',
        lastNameInput: 'input[id="customer_lastname"]',
        emailInput: 'input[id="email"]',
        passwordInput: 'input[id="passwd"]',
        dobDaySelect: 'select[id="days"]',
        dobDaysBlankOption: {
            selector: '(//*[@id="days"]/)/option[1]',
            locateStrategy: 'xpath'
        },
        dobFirstofMonth: {
            selector: '(//*[@id="days"]/)/option[2]',
            locateStrategy: 'xpath'
        },
        dobMonthSelect: 'select[id="months"]',
        dobMonthBlankOption: {
            selector: '(//*[@id="months"])/option[1]',
            locateStrategy: 'xpath'
        },
        januaryOption: {
            selector: '(//*[@id="months"])/option[2]',
            locateStrategy: 'xpath'
        },
        dobYearSelect: 'select[id="years"]',
        dobYearBlankOption: {
            selector: '(//*[@id="years"])/option[1]',
            locateStrategy: 'xpath'
        },
        dobYear1987Option: {
            selector: '(//*[@id="years"])/option[33]',
            locateStrategy: 'xpath'
        },
        newsletterInput: 'input[id="newsletter"]',
        specialOffersInput: 'input[id="optin"]',
        addressFirstNameInput: 'input[id="firstname"]',
        addressLastNameInput: 'input[id="lastname"]',
        addressCompanyInput: 'input[id="company"]',
        addressLine1: 'input[id="address1"]',
        addressLine2: 'input[id="address2"]',
        addressCityInput: 'input[id="city"]',
        addressStateSelect: 'select[id="id_state"]',
        addressStateBlankOption: {
            selector: '(//*[@id="id_state"])/option[1]',
            locateStrategy: 'xpath'
        },
        addressStateNYOption: {
            selector: '(//*[@id="id_state"])/option[34]',
            locateStrategy: 'xpath'
        },
        addressZipInput: 'input[id="postcode"]',
        addressCountrySelect: 'select[id="id_country"]',
        addressCountryBlankOption: {
            selector: '(//*[@id="id_country"])/option[1]',
            locateStrategy: 'xpath'
        },
        addressCountryUSOption: {
            selector: '(//*[@id="id_country"])/option[2]',
            locateStrategy: 'xpath'
        },
        addInfoTextArea: 'textarea[id="other"]',
        homePhoneInput: 'input[id="phone"]',
        mobilePhoneInput: 'input[id="phone_mobile"]',
        addressAliasInput: 'input[id="alias"]',
        registerButton: 'button[id="submitAccount"]',

        errorBox: 'div[class="alert alert-danger"]',
        errorHeader: {
            selector: '(//*[@id="center_column"])/div[1]/p[1]',
            locateStrategy: 'xpath'
        },
        errorText: {
            selector: '(//*[@id="center_column"])/div[1]/ol[1]/li[2]', 
            locateStrategy: 'xpath'
        },
    }

}