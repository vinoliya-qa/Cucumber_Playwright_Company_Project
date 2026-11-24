module.exports = {
    default: {
      paths: ['features/**/*.feature'],

        require: [
            'support/**/*.js',
            'step-definitions/**/*.js'
        ],

        format: [
            'progress',
            'json:reports/cucumber-report.json'
        ],

        parallel: 2,
        retry: 2
    }
};