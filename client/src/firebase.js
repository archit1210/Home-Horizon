// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-aec1c.firebaseapp.com",
    projectId: "mern-estate-aec1c",
    storageBucket: "mern-estate-aec1c.appspot.com",
    messagingSenderId: "703414295709",
    appId: "1:703414295709:web:9e5542df35cdc5bb798874"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);