// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3gZJOqQkjhuG0ud1369jVquyU_KPDP9Y",
    authDomain: "vite-contact-app-8876e.firebaseapp.com",
    projectId: "vite-contact-app-8876e",
    storageBucket: "vite-contact-app-8876e.firebasestorage.app",
    messagingSenderId: "105947671512",
    appId: "1:105947671512:web:0bf20c3433598094a4e0ad",
    measurementId: "G-VN6M3KHG4D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)