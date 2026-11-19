
class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.message = page.locator('#message');
    }

    async openLoginPage() {
        await this.page.setContent(`
            <h2>Login Page</h2>

            <input id="username" placeholder="Username">
            <input id="password" type="password" placeholder="Password">

            <button id="login">Login</button>

            <p id="message"></p>

            <script>
                document.querySelector('#login').onclick = () => {
                    const username =
                        document.querySelector('#username').value;

                    const password =
                        document.querySelector('#password').value;

                    document.querySelector('#message').innerText =
                        username === 'admin' && password === '12345'
                        ? 'Login Successful'
                        : 'Invalid Credentials';
                };
            </script>
        `);
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
