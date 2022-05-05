import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEHCAt-kHRd5hNDwrEpdfHP-lcABZeBpk',
  authDomain: 'house-marketplace-app-ab969.firebaseapp.com',
  projectId: 'house-marketplace-app-ab969',
  storageBucket: 'house-marketplace-app-ab969.appspot.com',
  messagingSenderId: '460024894259',
  appId: '1:460024894259:web:9820abd8dd9597edfde446',
}
initializeApp(firebaseConfig)
export const db = getFirestore()
