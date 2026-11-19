const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');
const path = require('path');

const FileUploadPage = require('../pages/FileUploadPage');

let fileUploadPage;

Given('user opens the file upload page', async function () {
    fileUploadPage = new FileUploadPage(this.page);

    await fileUploadPage.openPage();
});

When('user selects the sample file', async function () {
    const filePath = path.resolve(
        'test-data',
        'sample.txt'
    );

    await fileUploadPage.uploadFile(filePath);
});

When('user clicks the upload button', async function () {
    await fileUploadPage.clickUpload();
});

Then('uploaded file name should be displayed', async function () {

    await expect(this.page.locator('body'))
        .toContainText('sample.txt');

});