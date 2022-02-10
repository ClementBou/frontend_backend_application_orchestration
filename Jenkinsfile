pipeline {
    agent any

    stages {
        stage('Docker Compose') {
            steps {
                bat '''
                /usr/local/bin/docker-compose up
                '''
            }
        }
        stage('Test') {
            steps {
                bat '''
                npm test
                '''
            }
        }
    }

    post {
        always {
            bat '''
            docker-compose down
            '''
        }
    }
}
