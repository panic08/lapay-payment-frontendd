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
                sh "chmod +x -R ${env.WORKSPACE}"
                sh 'jenkins/scripts/start.sh'
            }
        }
    }
}