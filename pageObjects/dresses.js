module.exports = {
    url: 'http://automationpractice.com/index.php?id_category=8&controller=category',

    elements: {
        firstItemCheckOutButton: {
            selector: '//*[@id="center_column"]/ul/li[1]/div/div[2]/div[2]/a[1]',
            locateStrategy: 'xpath'
        },
        proceedToCheckOut1: 'a[href="btn btn-default button button-medium"]',
        proceedToCheckOut2: 'a[href="http://automationpractice.com/index.php?controller=order&step=1"]',
        proceedToCheckout3: 'button[name="processAddress"]',
        agreeToTerms: 'input[type="checkbox"]',
        availabilityLabel: 'span[class="label label-success"]',
        payByBankWire: 'a[class="bankwire"]',
        payByCheck: 'a[class="cheque"]',
        confirmButton: 'button[class="button btn btn-default button-medium"]',
        backToOrders: 'a[title="Back to orders"]',
        firstOrderItem: {
            selector: '(//*[@id="order-list"])/tbody[1]/tr[1]',
            locateStrategy: 'xpath'
        }
    }
}