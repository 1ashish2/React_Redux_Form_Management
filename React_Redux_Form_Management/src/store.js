import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'

import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
 
const fbConfig = {
  apiKey: "AIzaSyAoV7JA91MIAQkC4nVd3QDmQtrfX4W3ld8",
  authDomain: "studentbase-4b21f.firebaseapp.com",
  databaseURL: "https://studentbase-4b21f.firebaseio.com",
  projectId: "studentbase-4b21f",
  storageBucket: "studentbase-4b21f.appspot.com",
  messagingSenderId: "686018814611",
  appId: "1:686018814611:web:2e16774f6fe190fbc7a366",
  measurementId: "G-QV7FLZXG73"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
 firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
}
 

export default store