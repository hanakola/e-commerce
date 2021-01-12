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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
