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

        stage('Deployment on Release Branch') {
            steps {
                bat 'git config --global user.email "clement.boulanger@efrei.net"'
                bat 'git config --global user.name "ClementBou"'
                bat 'git branch -D release'
                bat 'git checkout dev'
                bat 'git pull'
                bat 'git checkout release'
                bat 'git merge dev'
                withCredentials([usernamePassword(credentialsId: 'GitHub', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    bat "git push http://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/ealeixoc-99/frontend-backend-orchestration.git"
                }
            }
    }

    post {
        always {
            sh '/usr/local/bin/docker-compose down'
        }
    }
    
}


