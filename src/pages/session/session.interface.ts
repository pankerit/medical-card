import { Merge } from 'ts-essentials'
interface AdditionalData {
  doctor: Pick<FirestoreData.Doctor, 'firstName' | 'lastName'>
  serviceName: string
}

export type SessionsI = Merge<FirestoreData.Session, AdditionalData>
