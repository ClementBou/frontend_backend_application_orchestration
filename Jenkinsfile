pipeline {
    agent any

    stages {
        stage('Docker Compose') {
            steps {
                sh '''
                export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin/
                docker-compose up
                '''
            }
        }
    }
}