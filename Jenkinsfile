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
                sh 'chmod 777 ./docker-compose.yml'
                sh 'sudo docker-compose down'
                sh 'sudo docker-compose up -d'
            }
        }
    }
}
