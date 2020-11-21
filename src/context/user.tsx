import firebase from 'firebase'
import React, { createContext, useState, useEffect } from 'react'

interface User extends firebase.User, FirestoreData.User {}
type State = [User, boolean]

const UserStateContext = createContext<State | undefined>(undefined)

export const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState<User>()
  useEffect(() => {
    let listener1: () => void
    const listener = firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        listener1 = firebase
          .firestore()
          .doc(`users/${user.uid}`)
          .onSnapshot((snap) => {
            if (snap.exists) {
              const data = snap.data() as FirestoreData.User
              setState({ ...user, ...data })
              setLoading(false)
            } else {
              setLoading(true)
            }
          })
        return
      } else {
        listener1 && listener1()
        setLoading(false)
        setState(undefined)
      }
    })
    return () => {
      listener()
      listener1 && listener1()
      console.log('unsubscribe')
    }
  }, [])

  return <UserStateContext.Provider value={[state!, loading]}>{children}</UserStateContext.Provider>
}

export const useUser = () => {
  const context = React.useContext(UserStateContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserStateProvider')
  }
  return context
}
