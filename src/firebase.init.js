// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI_IUoHobFgtAhekAY56WA2HtdBmNVCkU",
    authDomain: "furnicore-e2178.firebaseapp.com",
    projectId: "furnicore-e2178",
    storageBucket: "furnicore-e2178.appspot.com",
    messagingSenderId: "721627811164",
    appId: "1:721627811164:web:705efc97f29a7dc7e34599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app