
const config = {
    environment: process.env.ENV || 'qa',

    baseURL: {
        qa: 'https://testautomationpractice.blogspot.com/',
        dev: 'https://testautomationpractice.blogspot.com/',
        production: 'https://testautomationpractice.blogspot.com/'
    },

    headless: false,
    timeout: 30000,

    screenshotDir: 'test-results/screenshots',
    videoDir: 'test-results/videos'
};

config.url = config.baseURL[config.environment];

module.exports = config;
