import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCabTV6_TdU4-sqLf0wqdwZ_l4nRxprU9o",
    authDomain: "crown-db-e2970.firebaseapp.com",
    databaseURL: "https://crown-db-e2970.firebaseio.com",
    projectId: "crown-db-e2970",
    storageBucket: "crown-db-e2970.appspot.com",
    messagingSenderId: "958488159866",
    appId: "1:958488159866:web:549d988888b070e96e7dc3"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        console.log('display name');
        console.log(displayName);
        try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           }) 

        } catch(error){
            console.log('error creating user', error.message);
        }
        return userRef;
    }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;