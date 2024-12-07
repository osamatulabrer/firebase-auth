// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUE5RxkIzB5N58g3UsE_L_rbliwJsrOhU",
  authDomain: "fir-auth-5e54d.firebaseapp.com",
  projectId: "fir-auth-5e54d",
  storageBucket: "fir-auth-5e54d.firebasestorage.app",
  messagingSenderId: "526726710073",
  appId: "1:526726710073:web:6b85c01e286452a4271ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}