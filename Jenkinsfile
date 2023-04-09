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
                sh 'echo "all working guys, im not sucked, dude"'
            }
        }
    }
}