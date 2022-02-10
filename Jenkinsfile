pipeline {
    agent any

    stages {
        stage('Docker Compose') {
            steps {
                sh """
                /usr/local/bin/docker-compose up
                """
            }
        }
    }
}