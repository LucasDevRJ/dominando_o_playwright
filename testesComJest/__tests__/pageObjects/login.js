class login {
    async email() {
        return await page.$('#user-name')
    }
    async password_fill(test) {
        return await page.type('#password', test)
    }
    async signInButton_click() {
        return await page.click('#login-button')
    }
}
module.exports = login