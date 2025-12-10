
// Page Object example
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) { this.page = page }
  async goto(){ await this.page.goto('https://example.com/login') }
  async login(user, pass){
    await this.page.fill('input[name=email]', user)
    await this.page.fill('input[name=password]', pass)
    await this.page.click('button[type=submit]')
  }
}
module.exports = LoginPage;
