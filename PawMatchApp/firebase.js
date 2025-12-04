// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoJqoWJYBrvSy9bSvx88y7LTrwxkwXUkg",
  authDomain: "pawmatch-3c4f9.firebaseapp.com",
  projectId: "pawmatch-3c4f9",
  storageBucket: "pawmatch-3c4f9.firebasestorage.app",
  messagingSenderId: "1000355327920",
  appId: "1:1000355327920:web:57c35086d9e85e72fe7075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
