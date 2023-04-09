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
                sh 'BUILD_ID=dontKillMe npm start &'
            }
        }
    }
}