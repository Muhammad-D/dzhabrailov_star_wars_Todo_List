import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEAUdEiGJuDZq2fu_FhDIJCb_P_JSkai4",
  authDomain: "star-wars-todo-list.firebaseapp.com",
  databaseURL: "https://star-wars-todo-list.firebaseio.com",
  projectId: "star-wars-todo-list",
  storageBucket: "star-wars-todo-list.appspot.com",
  messagingSenderId: "108822519077",
  appId: "1:108822519077:web:1380d78ea6951bcf0acecc",
  measurementId: "G-2B941645X5",
});

export const db = firebaseApp.firestore();
