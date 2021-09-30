// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVwd0rGh_HB_pFX5DVILO1ztvrEfvAL2k",
  authDomain: "mi-ecommerce-beer.firebaseapp.com",
  projectId: "mi-ecommerce-beer",
  storageBucket: "mi-ecommerce-beer.appspot.com",
  messagingSenderId: "58213453981",
  appId: "1:58213453981:web:90dcb154e04d833909c474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 export const getFirebase=() => app;
 export const getFirestore= () => firebaseConfig.firestore(app);
