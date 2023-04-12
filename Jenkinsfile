pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install --ignore-engines'
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
                   sh 'sudo chmod +r ./docker-compose.yml'
                   sh 'sudo chmod +x ./docker-compose.yml'
                   sh 'docker-compose version'
                   sh 'sudo docker ps'
                   sh 'whoami'
                   sh 'id'
                   sh 'ls -l docker-compose.yml'
                   sh 'sudo -u jenkins cat ./docker-compose.yml'
                   sh 'sudo chmod +rx ./docker-compose.yml'
                   sh 'sudo chown jenkins ./docker-compose.yml'


                sh 'sudo docker-compose --log-level debug up -d'
            }
        }
    }
}
