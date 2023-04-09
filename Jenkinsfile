pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Stop') {
            steps {
                sh 'npm stop'
            }
        }
        stage('Run') {
            steps {
                sh 'nohup npm start &'
            }
        }
    }
}
