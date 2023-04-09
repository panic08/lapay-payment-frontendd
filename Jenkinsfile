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
                sh 'pkill node'
            }
        }
        stage('Run') {
            steps {
                sh 'start.sh'
            }
        }
    }
}
