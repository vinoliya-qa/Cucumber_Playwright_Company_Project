class AlertsPage {
    constructor(page) {
        this.page = page;

        this.simpleAlertButton = page.getByRole('button', {
            name: 'Simple Alert'
        });

        this.confirmAlertButton = page.getByRole('button', {
            name: 'Confirmation Alert'
        });

        this.promptAlertButton = page.getByRole('button', {
            name: 'Prompt Alert'
        });
    }

    async openPage() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    async clickSimpleAlert() {
        await this.simpleAlertButton.click();
    }

    async clickConfirmAlert() {
        await this.confirmAlertButton.click();
    }

    async clickPromptAlert() {
        await this.promptAlertButton.click();
    }
}

module.exports = AlertsPage;