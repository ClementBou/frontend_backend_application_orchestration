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
        stage('Test') {
            parallel {
                steps {
                    sh """
                    npm test
                    """
                }
            }
            
        }
    }

    post {
        always {
            sh 'docker-compose down'
        }
    }
}
