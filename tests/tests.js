module.exports = {
    beforeEach: browser => {
        let homePage = browser.page.homePage();
        homePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'DCS-8: Signup (valid inputs)': browser => signUpFunctions.signUpValid(browser),
    'DCS-9: Signup (invalid inputs)': browser => signUpFunctions.signUpInvalid(browser),
    'DCS-11: Login (invalid inputs)': browser => loginFunctions.loginInvalid(browser),
    'DCS-10: Login (valid inputs)': browser => loginFunctions.loginValid(browser),
    'DCS-7 : Favoriting items' : browser => favFunctions.favoriteFromHomepage(browser),
    'DCS-6 : Adding items to cart' : browser => cartFunctions.addToCart(browser),
    'DCS-12: Log out': browser => loginFunctions.logOut(browser),
}