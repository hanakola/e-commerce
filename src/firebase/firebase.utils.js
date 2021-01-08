import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzws8URHgIGor5XaNG_PU3AuaSFsnQFQU",
  authDomain: "e-commerce-8e6d7.firebaseapp.com",
  projectId: "e-commerce-8e6d7",
  storageBucket: "e-commerce-8e6d7.appspot.com",
  messagingSenderId: "993389868568",
  appId: "1:993389868568:web:5e975019dafd2e0e5b756d",
  measurementId: "G-WYCRW3QNJC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
