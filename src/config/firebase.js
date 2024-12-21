// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Sm1FxvHPxr7UcVfMT42lMVb6Elhvl9o",
  authDomain: "contact-app-b08e4.firebaseapp.com",
  projectId: "contact-app-b08e4",
  storageBucket: "contact-app-b08e4.firebasestorage.app",
  messagingSenderId: "167751175046",
  appId: "1:167751175046:web:eb09a0e9c5478e5d4a3a07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);