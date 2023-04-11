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
                sh 'docker stop $(docker ps -aq) && docker rm $(docker ps -aq)'
                sh 'docker-compose up -d'
            }
        }
    }
}
