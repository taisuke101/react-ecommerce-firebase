import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAlwm0IceaxcAYwzuR6ekehdmuYnrSHv8E",
    authDomain: "react-ecommerce-62b61.firebaseapp.com",
    databaseURL: "https://react-ecommerce-62b61.firebaseio.com",
    projectId: "react-ecommerce-62b61",
    storageBucket: "react-ecommerce-62b61.appspot.com",
    messagingSenderId: "703531725181",
    appId: "1:703531725181:web:d83fb42b81e83e06d31c14",
    measurementId: "G-BZ068M74T0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;