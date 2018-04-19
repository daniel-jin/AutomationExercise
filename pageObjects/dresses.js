module.exports = {
    url: 'http://automationpractice.com/index.php?id_category=8&controller=category',

    elements: {
        firstItemImage: 'img[src="http://automationpractice.com/img/p/8/8-home_default.jpg"]',
        moreInfoButton: {
            selector: '(//*[@id="center_column"])/ul[1]/li[1]/div[1]/div[2]/div[2]/a[2]',
            locateStrategy: 'xpath'
        },
        firstItemAddToCart: {
            selector: '//*[@id="center_column"]/ul/li[1]/div/div/div[3]/div/div[2]/a[1]',
            locateStrategy: 'xpath'
        },
        listButton: 'i[class="icon-th-list"]',
        firstItemCheckOutButton: 'a[href="http://automationpractice.com/index.php?controller=cart&add=1&id_product=3&token=91dc36987ac2d0283e72b1dcae0f587e"]',
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