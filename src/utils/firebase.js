// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9gONNcuM5uB3wqoTYrfJDo-v65eEGsY0",
  authDomain: "netflixgpt-c3003.firebaseapp.com",
  projectId: "netflixgpt-c3003",
  storageBucket: "netflixgpt-c3003.appspot.com",
  messagingSenderId: "952787941538",
  appId: "1:952787941538:web:512b384331678f0424fffb",
  measurementId: "G-4TDBDJ12XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
