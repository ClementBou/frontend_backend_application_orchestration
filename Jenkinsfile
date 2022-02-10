pipeline {
    agent any

    environment {
        PATH = "$PATH:</usr/local/bin/docker-compose>"
    }

    stages {
        stage('NPMBuild') {
            steps {
                sh 'docker-compose up'
            }
        }
    }
}