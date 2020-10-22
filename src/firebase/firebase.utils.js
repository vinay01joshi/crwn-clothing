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

export const CreateUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (err) {
            console.log('Error creating user', err);
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (collectinKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectinKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;