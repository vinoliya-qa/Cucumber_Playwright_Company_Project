
const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        'Project Name': 'Cucumber Playw right Company Project',
        'Browser': 'Chromium',
        'Framework': 'Cucumber + Playwright',
        'Platform': 'Windows'
    }
};

reporter.generate(options);

console.log('HTML Report generated successfully!');
