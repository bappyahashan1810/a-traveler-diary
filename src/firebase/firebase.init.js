// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA3yqWiigEwcLL_gogmF4yVJIEq6pkm7w",
    authDomain: "a-travler-s-diary.firebaseapp.com",
    projectId: "a-travler-s-diary",
    storageBucket: "a-travler-s-diary.appspot.com",
    messagingSenderId: "280785792610",
    appId: "1:280785792610:web:f67955be6a4186efd32b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;