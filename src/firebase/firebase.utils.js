import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMzjZDBln28vx2dBt0TwCQ5h78gr62HpU",
    authDomain: "crwn-db-8f1f6.firebaseapp.com",
    databaseURL: "https://crwn-db-8f1f6.firebaseio.com",
    projectId: "crwn-db-8f1f6",
    storageBucket: "crwn-db-8f1f6.appspot.com",
    messagingSenderId: "905446296310",
    appId: "1:905446296310:web:62c80487b15499d26cfad7",
    measurementId: "G-7GL81XQ04V"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;