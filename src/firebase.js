import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9Z4ISIyXLxt6hU5W-JTMu6Wny-cBUdj0",
    authDomain: "discord-clone-858fc.firebaseapp.com",
    databaseURL: "https://discord-clone-858fc.firebaseio.com",
    projectId: "discord-clone-858fc",
    storageBucket: "discord-clone-858fc.appspot.com",
    messagingSenderId: "871878479616",
    appId: "1:871878479616:web:806eb028c7cd3c69dd2de5",
    measurementId: "G-JDXEDDCBHB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;