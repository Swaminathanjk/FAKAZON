import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC9VowkvvhMXTJtcfpUWrRgOF3cHOc4vXc",
  authDomain: "amaclone-1b21c.firebaseapp.com",
  projectId: "amaclone-1b21c",
  storageBucket: "amaclone-1b21c.appspot.com",
  messagingSenderId: "475544668131",
  appId: "1:475544668131:web:888f3e8be355dd1c3a82d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword };
