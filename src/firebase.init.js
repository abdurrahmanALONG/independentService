// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgw7DkYj7wSz54IGG5pUL3yoPsYuvqJic",
    authDomain: "ar-constraction.firebaseapp.com",
    projectId: "ar-constraction",
    storageBucket: "ar-constraction.appspot.com",
    messagingSenderId: "980559743766",
    appId: "1:980559743766:web:533b1005298097e0bc9e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;