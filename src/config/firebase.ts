import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'

export const firebaseConfig = {
  apiKey: 'AIzaSyCHOzEF6HHpaJ9PES5cACPnEw2RZSCR1B0',
  authDomain: 'online-medical-card.firebaseapp.com',
  databaseURL: 'https://online-medical-card.firebaseio.com',
  projectId: 'online-medical-card',
  storageBucket: 'online-medical-card.appspot.com',
  messagingSenderId: '13769115548',
  appId: '1:13769115548:web:35f6c23c0a741df326ea59',
  measurementId: 'G-VJFVNV3LWK',
}

firebase.initializeApp(firebaseConfig)
