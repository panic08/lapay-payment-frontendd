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
                   sh 'chmod +x /home/panic/.jenkins/workspace/Jenkins-testing/jenkins/scripts/deploy.sh'
                   sh 'sudo chmod +r docker-compose.yml'
                   sh 'sudo chmod +x docker-compose.yml'
                   sh 'docker-compose version'
//                 sh 'sudo chmod 777 ./docker-compose.yml'
//                 sh 'sudo chmod 777 .'


                sh 'sudo docker-compose up -d'
            }
        }
    }
}
