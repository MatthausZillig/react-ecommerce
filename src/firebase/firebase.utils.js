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

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
