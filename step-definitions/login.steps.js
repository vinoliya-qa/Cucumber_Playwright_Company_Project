
const {
    Given,
    When,
    Then,
    Before,
    After,
    setDefaultTimeout
} = require('@cucumber/cucumber');

const { chromium, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const config = require('../config/config');

setDefaultTimeout(config.timeout);

// =====================================
// BEFORE HOOK - Browser Setup
// =====================================

Before(async function () {

    this.browser = await chromium.launch({
        headless: config.headless
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);

});

// =====================================
// AFTER HOOK - Screenshot on Failure
// =====================================

After(async function (scenario) {

    try {

        if (scenario.result.status === 'FAILED' && this.page) {

            const screenshot = await this.page.screenshot({
                fullPage: true
            });

            await this.attach(screenshot, 'image/png');

            console.log('Failure screenshot attached');

        }

    } finally {

        if (this.context) {
            await this.context.close();
        }

        if (this.browser) {
            await this.browser.close();
        }

    }

});

// =====================================
// LOGIN PAGE
// =====================================

Given('user opens the login page', async function () {

    await this.loginPage.openLoginPage();

});

When('user enters {string} and {string}', async function (username, password) {

    await this.loginPage.enterUsername(username);

    await this.loginPage.enterPassword(password);

});

When('user clicks the login button', async function () {

    await this.loginPage.clickLogin();

});

Then('user should see {string}', async function (message) {

    await expect(this.loginPage.message).toHaveText(message);

});

// =====================================
// DATATABLE - HASHES()
// =====================================

When('user checks credentials using hashes', async function (dataTable) {

    const users = dataTable.hashes();

    for (const user of users) {

        console.log('Username:', user.username);
        console.log('Password:', user.password);

    }

});

// =====================================
// DATATABLE - ROWS()
// =====================================

When('user reads credentials using rows', async function (dataTable) {

    const users = dataTable.rows();

    for (const user of users) {

        console.log('Username:', user[0]);
        console.log('Password:', user[1]);

    }

});

// =====================================
// DATATABLE - RAW()
// =====================================

When('user reads complete table using raw', async function (dataTable) {

    const users = dataTable.raw();

    console.log('Complete DataTable:');
    console.log(users);

});

