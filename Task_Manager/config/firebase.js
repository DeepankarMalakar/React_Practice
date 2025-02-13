// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWDaQo5s73yv_XpLUqu9sD-O_pcWTOHfI",
    authDomain: "task-manager-b8a84.firebaseapp.com",
    projectId: "task-manager-b8a84",
    storageBucket: "task-manager-b8a84.firebasestorage.app",
    messagingSenderId: "1033271999793",
    appId: "1:1033271999793:web:958de5c9c9df02194c8410"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)