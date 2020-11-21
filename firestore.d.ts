export {}

declare global {
  export module FirestoreData {
    export interface User {
      type: 'client' | 'doctor'
      firstName: string
      lastName: string
      country: string
      id: number
      gen: 'f' | 'm'
      bday: string
      adress: string
    }
    export interface Session {
      client: string
      status: 'confirmed' | 'declined' | 'waiting' | 'done'
      date: number
      doctor: string
      price: number
      service: string
    }
    export interface Client extends User {
      type: 'client'
    }
    export interface Doctor extends User {
      type: 'client'
    }
    export interface Services {
      name: string
    }
  }
}
