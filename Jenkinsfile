pipeline {
  agent {
    docker {
      image 'node:20.16.0-alpine3.20'
    }
    stages {
      stage('Check Configuration') {
        steps {
          sh 'node --version'
        }
      }
    }
    stage('Checkout Repositories') {
        parallel {
            stage('Checkout Primary Repo') {
                // agent { docker { image 'your-docker-image:latest' } }
                steps {
                    checkout scm
                }
            }
            stage('Checkout Secondary Repo') {
                // steps {
                //     withCredentials([usernamePassword(credentialsId: 'your-credentials-id', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                //         git url: 'https://github.com/your-username/secondary-repo.git', credentialsId: 'your-credentials-id'
                //     }
                // }
                steps {
                  git 'https://github.com/Vipulwaghmare/portfolio-backend.git'
                }
            }
        }
    }
  }
}
