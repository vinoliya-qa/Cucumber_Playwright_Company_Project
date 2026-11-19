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
    }

    post {
        always {
            echo 'Cucumber Playwright execution completed'
        }
    }
}