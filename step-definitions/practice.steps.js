
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const PracticePage = require('../pages/PracticePage');

Given('user opens the practice website', async function () {
    this.practicePage = new PracticePage(this.page);
    await this.practicePage.openPage();
});

When('user enters name {string}', async function (name) {
    await this.practicePage.enterName(name);
});

Then('name field should contain {string}', async function (name) {
    await expect(this.practicePage.nameInput).toHaveValue(name);
});

When('user clears the name field', async function () {
    await this.practicePage.clearName();
});

Then('name field should be empty', async function () {
    await expect(this.practicePage.nameInput).toBeEmpty();
});

When('user selects Male radio button', async function () {
    await this.practicePage.selectMale();
});

Then('Male radio button should be selected', async function () {
    await expect(this.practicePage.maleRadio).toBeChecked();
});

When('user selects Female radio button', async function () {
    await this.practicePage.selectFemale();
});

Then('Female radio button should be selected', async function () {
    await expect(this.practicePage.femaleRadio).toBeChecked();
});
When('user selects Sunday checkbox', async function () {
    await this.practicePage.selectSunday();
});

Then('Sunday checkbox should be selected', async function () {
    await expect(this.practicePage.sundayCheckbox).toBeChecked();
});

When('user selects Monday checkbox', async function () {
    await this.practicePage.selectMonday();
});

Then('Monday checkbox should be selected', async function () {
    await expect(this.practicePage.mondayCheckbox).toBeChecked();
});

When('user selects Tuesday checkbox', async function () {
    await this.practicePage.selectTuesday();
});

Then('Tuesday checkbox should be selected', async function () {
    await expect(this.practicePage.tuesdayCheckbox).toBeChecked();
});

When('user selects country {string}', async function (country) {
    await this.practicePage.selectCountry(country);
});

Then('country dropdown should show {string}', async function (country) {
    await expect(this.practicePage.countryDropdown)
        .toHaveValue(country);
});

When('user enters date {string}', async function (date) {
    await this.practicePage.enterDate(date);
});

Then('date field should show {string}', async function (date) {
    await expect(this.practicePage.datePicker).toHaveValue(date);
});