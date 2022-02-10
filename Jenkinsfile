pipeline {
    agent any

    stages {
        stage('Docker Compose') {
            steps {
                sh """
                /usr/local/bin/docker-compose build
                """
            }
        }
        stage('Test') {
            steps {
                sh """
                npm test
                """
            }
        }
    }

    post {
        always {
            sh '/usr/local/bin/docker-compose down'
        }
    }
    
}