import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoJqoWJYBrvSy9bSvx88y7LTrwxkwXUkg",
  authDomain: "pawmatch-3c4f9.firebaseapp.com",
  projectId: "pawmatch-3c4f9",
  storageBucket: "pawmatch-3c4f9.appspot.com",  // manually corrected
  messagingSenderId: "1000355327920",
  appId: "1:1000355327920:web:57c35086d9e85e72fe7075"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

