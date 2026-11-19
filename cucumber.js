module.exports = {
    default: {
        paths: ['features/fileUpload.feature'],

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