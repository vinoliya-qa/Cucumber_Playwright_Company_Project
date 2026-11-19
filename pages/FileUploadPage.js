class FileUploadPage {
    constructor(page) {
        this.page = page;

        this.fileInput = page.locator('#singleFileInput');

        this.uploadButton = page.getByRole('button', {
            name: 'Upload Single File'
        });

        this.uploadMessage = page.locator('#singleFileText');
    }

    async openPage() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    async uploadFile(filePath) {
        await this.fileInput.setInputFiles(filePath);
    }

    async clickUpload() {
        await this.uploadButton.click();
    }
}

module.exports = FileUploadPage;