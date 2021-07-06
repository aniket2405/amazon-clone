// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey:
    'AIzaSyB47nqH9Jv-sEJgLShwq78LwDXhhty1np0',
  authDomain: 'clone-f6225.firebaseapp.com',
  databaseURL:
    'https://clone-f6225.firebaseio.com',
  projectId: 'clone-f6225',
  storageBucket: 'clone-f6225.appspot.com',
  messagingSenderId: '22545087580',
  appId:
    '1:22545087580:web:a0208c376c1f7855753a99',
  measurementId: 'G-Q05W3T6BGW',
}

const firebaseApp = firebase.initializeApp(
  firebaseConfig
)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
