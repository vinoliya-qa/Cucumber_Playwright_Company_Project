
class PracticePage {
    constructor(page) {
        this.page = page;

        // Name field
        this.nameInput = page.getByPlaceholder('Enter Name');

        // Radio buttons
        this.maleRadio = page.locator('#male');
        this.femaleRadio = page.locator('#female');

        // Checkboxes
        this.sundayCheckbox = page.locator('#sunday');
        this.mondayCheckbox = page.locator('#monday');
        this.tuesdayCheckbox = page.locator('#tuesday');

        // Country dropdown
        this.countryDropdown = page.locator('#country');

        // Date picker
        this.datePicker = page.locator('#datepicker');
    }

    async openPage() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    // Name methods
    async enterName(name) {
        await this.nameInput.fill(name);
    }

    async clearName() {
        await this.nameInput.clear();
    }

    // Radio methods
    async selectMale() {
        await this.maleRadio.check();
    }

    async selectFemale() {
        await this.femaleRadio.check();
    }

    // Checkbox methods
    async selectSunday() {
        await this.sundayCheckbox.check();
    }

    async selectMonday() {
        await this.mondayCheckbox.check();
    }

    async selectTuesday() {
        await this.tuesdayCheckbox.check();
    }

    // Dropdown method
    async selectCountry(country) {
        await this.countryDropdown.selectOption(country);
    }

    // Date picker method
    async enterDate(date) {
        await this.datePicker.fill(date);
    }
}

module.exports = PracticePage;
