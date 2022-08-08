// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4DxfhHqvoEGGKE5lm5bNorZoB2pgL7x0",
    authDomain: "react-eshop-f57bd.firebaseapp.com",
    projectId: "react-eshop-f57bd",
    storageBucket: "react-eshop-f57bd.appspot.com",
    messagingSenderId: "240178550944",
    appId: "1:240178550944:web:1f385a9635a410a76591c5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
