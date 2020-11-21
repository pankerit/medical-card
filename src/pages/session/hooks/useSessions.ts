import { useState, useEffect } from 'react'
import firebase from 'firebase'

import { useUser } from '../../../context/user'
import { SessionsI } from '../session.interface'

// type DoctorPick = Pick<FirestoreData.Doctor, 'firstName' | 'lastName'>

export default function useSessions() {
  const [user] = useUser()
  const [state, setState] = useState<SessionsI[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setState([])
    setLoading(true)
    const listener = firebase
      .firestore()
      .collection('sessions')
      .where('client', '==', user.uid)
      .onSnapshot(async (querySnap) => {
        const allPromise: Promise<SessionsI | null>[] = querySnap.docs.map(async (snap) => {
          const data = <FirestoreData.Session>snap.data()
          const snapDoctor = await firebase.firestore().doc(`doctors/${data.doctor}`).get()
          if (snapDoctor.exists) {
            const dataDoctor = <FirestoreData.Doctor>snapDoctor.data()
            const snapService = await firebase.firestore().doc(`services/${data.service}`).get()
            if (snapService.exists) {
              const dataService = <FirestoreData.Services>snapService.data()
              const payload: SessionsI = {
                ...data,
                doctor: {
                  firstName: dataDoctor.firstName,
                  lastName: dataDoctor.lastName,
                },
                serviceName: dataService.name,
              }
              return payload
            }
            return null
          }
          return null
        })

        const resolvePromise = await Promise.allSettled(allPromise)

        const sessions: SessionsI[] = []
        resolvePromise.forEach((promise) => {
          if (promise.status === 'fulfilled' && promise.value !== null) {
            sessions.push(promise.value)
          }
        })

        setState(sessions)
        setLoading(false)
      })
    return listener
  }, [])

  return <const>[state, loading]
}
