import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyA99ofgVTiwJaK57caohJb-gfA7oJ2tpjE',
  authDomain: 'react-ecommerce-93ec3.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-93ec3.firebaseio.com',
  projectId: 'react-ecommerce-93ec3',
  storageBucket: 'react-ecommerce-93ec3.appspot.com',
  messagingSenderId: '538353255797',
  appId: '1:538353255797:web:9e9f4c1c154944f4117f3c',
  measurementId: 'G-SQ45W6HP60'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.warn('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
