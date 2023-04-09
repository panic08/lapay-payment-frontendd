pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run') {
            steps {
                sh './jenkins/scripts/start.sh'
            }
        }
    }
}