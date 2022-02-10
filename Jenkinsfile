pipeline {
    agent any

    stages {
        stage('Docker Compose') {
            steps {
                sh '''
                /usr/local/bin/docker-compose build
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                cd ./frontend
                export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin/
                npm install
                npm test
                '''
            }
        }
    }

    post {
        always {
            sh '/usr/local/bin/docker-compose down'
        }
    }
    
}