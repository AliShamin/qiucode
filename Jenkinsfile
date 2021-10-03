// Script //
node {
  checkout scm
  stage('Build') {
  echo 'Started Building....'
  sh 'npm install'
  sh 'npm run build'
  }
  stage('Test') {
  echo 'Building....'
  }
  stage('Deploy') {
  echo 'Deploying....'
  }
}
