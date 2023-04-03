// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: 'AIzaSyBuP-TFZO0yQk3qHp8t77DutLDH4DPMomw',
    authDomain: 'habitat-hunter.firebaseapp.com',
    projectId: 'habitat-hunter',
    storageBucket: 'habitat-hunter.appspot.com',
    messagingSenderId: '1051380367603',
    appId: '1:1051380367603:web:dc22f540b24fd23d79b786',
    measurementId: 'G-C0N8CZRPE1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
