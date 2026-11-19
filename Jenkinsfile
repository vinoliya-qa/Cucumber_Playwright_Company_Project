pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate HTML Report') {
            steps {
                bat 'npm run report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/**, test-results/**',
                             allowEmptyArchive: true
        }
    }
}