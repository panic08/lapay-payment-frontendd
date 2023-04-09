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
                sh 'npm start'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'pkill node'
            }
        }
    }
}