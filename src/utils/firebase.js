import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/performance'
import 'firebase/analytics'

const config = {
  apiKey: 'AIzaSyBweMrMZAgboBP-TogN55KStjfVLJfvNDo',
  authDomain: 'bravo-test-3c5fd.firebaseapp.com',
  databaseURL:
    'https://bravo-test-3c5fd-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'bravo-test-3c5fd',
  storageBucket: 'bravo-test-3c5fd.appspot.com',
  messagingSenderId: '762402679446',
  appId: '1:762402679446:web:125eeb25f0085fdc5430b7',
}

firebase.initializeApp(config)
firebase.analytics()

export const auth = firebase.auth()
export const storage = firebase.storage().ref()
export const performance = firebase.performance()

export default firebase
