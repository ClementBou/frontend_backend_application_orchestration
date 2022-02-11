pipeline {
    agent any

    stages {
        stage('Docker Compose') {
            steps {
                sh '''
                /usr/local/bin/docker-compose up -d --build
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

        stage('Deployment') {
            steps {
                sh 'git config --global user.email "clement.boulanger@efrei.net"'
                sh 'git config --global user.name "ClementBou"'
                sh 'git checkout dev'
                sh 'git pull'
                sh 'git checkout release'
                sh 'git merge dev'
                withCredentials([usernamePassword(credentialsId: 'GitHub', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/ClementBou/frontend_backend_application_orchestration.git')
                }
            }
    }

    post {
        always {
            sh '/usr/local/bin/docker-compose down'
        }
    }
    
}


