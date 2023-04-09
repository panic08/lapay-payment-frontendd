pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run') {
            sh 'npm start'
        }
    }
}