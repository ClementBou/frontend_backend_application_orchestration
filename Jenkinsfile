pipeline {
    agent any
    
    stages {
        stage('NPMBuild') {
            steps {
                sh "docker-compose up"
            }
        }
    }
}