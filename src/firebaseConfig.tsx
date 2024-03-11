// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7MXVNvgq2M-y3wKiQYOFLGaAfrz3pR2U",
  authDomain: "pric-app-8096e.firebaseapp.com",
  projectId: "pric-app-8096e",
  storageBucket: "pric-app-8096e.appspot.com",
  messagingSenderId: "104339149397",
  appId: "1:104339149397:web:bc595bd053b1c820c9badc",
  measurementId: "G-ZP469RYL8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};

