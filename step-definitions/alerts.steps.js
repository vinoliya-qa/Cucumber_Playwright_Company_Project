
const {
    Given,
    When,
    Then,
    Before,
    After
} = require('@cucumber/cucumber');

const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const AlertsPage = require('../pages/AlertsPage');
const config = require('../config/config');

let browser;
let context;
let page;
let alertsPage;

Before(async function () {

    fs.mkdirSync(config.screenshotDir, { recursive: true });
    fs.mkdirSync(config.videoDir, { recursive: true });

    browser = await chromium.launch({
        headless: config.headless
    });

    context = await browser.newContext({
        recordVideo: {
            dir: config.videoDir,
            size: {
                width: 1280,
                height: 720
            }
        }
    });

    page = await context.newPage();

    alertsPage = new AlertsPage(page);
});

After(async function (scenario) {

    try {
        if (scenario.result.status === 'FAILED' && page) {

            const screenshot = await page.screenshot({
                path: path.join(
                    config.screenshotDir,
                    `failure-${Date.now()}.png`,
                    ),
                fullPage: true
            });

            await this.attach(screenshot, 'image/png');

            console.log('Failure screenshot saved');
        }
    } finally {

        if (context) {
            await context.close();
        }

        if (browser) {
            await browser.close();
        }

        console.log('Video recording saved in:', config.videoDir);
    }
});

Given('user opens the alerts practice page', async function () {
    await alertsPage.openPage();
});

When('user clicks Simple Alert button', async function () {
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await alertsPage.clickSimpleAlert();
});

Then('simple alert message should be displayed', async function () {
    await expect(page.locator('body')).toBeVisible();
});

When('user clicks Confirmation Alert button', async function () {
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        await dialog.accept();
    });

    await alertsPage.clickConfirmAlert();
});

Then('confirmation alert message should be displayed', async function () {
    await expect(page.locator('body')).toContainText('You pressed OK!');
});

When('user clicks Prompt Alert button', async function () {
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        await dialog.accept('Ajay');
    });

    await alertsPage.clickPromptAlert();
});

Then('prompt alert should accept the text {string}', async function (name) {
    await expect(page.locator('body')).toContainText(name);
});
