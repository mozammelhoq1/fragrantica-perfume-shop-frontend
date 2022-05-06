// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4m7bIjM3x4A1M3b1doBMwrp6C89KaM70",
  authDomain: "fragrantica-1.firebaseapp.com",
  projectId: "fragrantica-1",
  storageBucket: "fragrantica-1.appspot.com",
  messagingSenderId: "662157698973",
  appId: "1:662157698973:web:c37afd501200e1c81c7174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
