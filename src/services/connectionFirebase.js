// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE-6Oyz_3WenKrQif0nUoRhq0OgISt5oo",
  authDomain: "projetoapim-11af0.firebaseapp.com",
  databaseURL: "https://projetoapim-11af0-default-rtdb.firebaseio.com",
  projectId: "projetoapim-11af0",
  storageBucket: "projetoapim-11af0.appspot.com",
  messagingSenderId: "737058591684",
  appId: "1:737058591684:web:85b79e46c667ec6b96ca91",
  measurementId: "G-SBMJJBMHX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);