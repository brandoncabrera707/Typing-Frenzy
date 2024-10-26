import { initializeApp } from "firebase/app";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw2V9n3kuStESezzg9MtZ3vYcS95pDIqA",
  authDomain: "typingfrenzy-d59e6.firebaseapp.com",
  projectId: "typingfrenzy-d59e6",
  storageBucket: "typingfrenzy-d59e6.appspot.com",
  messagingSenderId: "381628760234",
  appId: "1:381628760234:web:7df65417a4b22b9dc690d3",
  measurementId: "G-B5WED008ED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

