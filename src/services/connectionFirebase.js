import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

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

if (!firebase.apps.length) {
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  }

export default firebase;