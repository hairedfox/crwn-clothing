import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuI8GllYUJ3_imlQE5HlEzjYQDmPjAZm4",
  authDomain: "harefx-crwn.firebaseapp.com",
  databaseURL: "https://harefx-crwn.firebaseio.com",
  projectId: "harefx-crwn",
  storageBucket: "harefx-crwn.appspot.com",
  messagingSenderId: "475517850877",
  appId: "1:475517850877:web:e1342a24df821525b61a94",
  measurementId: "G-FHWX9Y4YVH"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;