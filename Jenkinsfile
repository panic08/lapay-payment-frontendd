pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Test"'
            }
        }


        stage('Deploy') {
            steps {
            sh './jenkins/scripts/deploy.sh'
//                 sh 'sudo chmod 777 ./docker-compose.yml'
//                 sh 'sudo chmod 777 .'
//                 sh 'sudo chown $USER:$USER ./docker-compose.yml'
// //                 sh 'docker stop $(docker ps -aq)'
// //                 sh 'docker rm $(docker ps -aq)'
//                 sh 'sudo docker-compose up -d'
            }
        }
    }
}
