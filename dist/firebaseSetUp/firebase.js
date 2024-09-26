const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw2V9n3kuStESezzg9MtZ3vYcS95pDIqA",
  authDomain: "typingfrenzy-d59e6.firebaseapp.com",
  projectId: "typingfrenzy-d59e6",
  storageBucket: "typingfrenzy-d59e6.appspot.com",
  messagingSenderId: "381628760234",
  appId: "1:381628760234:web:7df65417a4b22b9dc690d3",
  measurementId: "G-B5WED008ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

module.exports = db


