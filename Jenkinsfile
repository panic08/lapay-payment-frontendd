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
                timeout(time: 7, unit: 'MINUTES') {
                    sh 'BUILD_ID=dontKillMe npm start &'
                }
            }
        }
    }
}