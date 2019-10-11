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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;