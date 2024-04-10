// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABoS1f-nkKyWO1GOE7jVb5YLfGIx9Uhc",
  authDomain: "projetoapispotify-37b8e.firebaseapp.com",
  databaseURL: "https://projetoapispotify-37b8e-default-rtdb.firebaseio.com",
  projectId: "projetoapispotify-37b8e",
  storageBucket: "projetoapispotify-37b8e.appspot.com",
  messagingSenderId: "786253225234",
  appId: "1:786253225234:web:9b408fb5e788b1cb5d27cb",
  measurementId: "G-1JXTDFN5BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;