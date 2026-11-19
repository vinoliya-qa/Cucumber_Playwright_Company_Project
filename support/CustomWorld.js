
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor({ attach, log, parameters }) {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.loginPage = null;

        // Cucumber functions
        this.attach = attach;
        this.log = log;
        this.parameters = parameters;
    }
}

setWorldConstructor(CustomWorld);
