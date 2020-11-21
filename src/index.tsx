import React from 'react'
import ReactDOM from 'react-dom'
import './config/firebase'
import App from './app'
import firebase from 'firebase'
import { UserProvider } from './context/user'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
firebase.auth().signInWithEmailAndPassword('test@gmail.com', '123123')
// firebase
//   .firestore()
//   .collection('doctors')
//   .where('services.c', '!=', null)
//   .get()
//   .then((snap) => {
//     snap.forEach((snap) => {
//       console.log(snap.data())
//     })
//   })
