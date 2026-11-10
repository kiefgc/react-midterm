
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Test') {
            steps {
                sh 'npm ci'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Artifact') {
            steps {
                sh '''
                    rm -rf artifact
                    mkdir -p artifact

                    cp -r dist artifact/
                    cp Dockerfile.pipeline artifact/Dockerfile

                    tar -czf react-app-${BUILD_NUMBER}.tar.gz \
                        -C artifact .
                '''

                archiveArtifacts(
                    artifacts: 'react-app-*.tar.gz',
                    fingerprint: true
                )
            }
        }
    }
}
