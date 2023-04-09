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
                sh 'npm run build'
                sh 'nohup npm start'
            }
        }
    }
}
