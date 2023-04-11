pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Test"'
            }
        }


        stage('Deploy') {
            steps {
                sh 'chmod 644 docker-compose.yml'
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
