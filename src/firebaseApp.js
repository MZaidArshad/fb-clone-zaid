import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBEIhAmY641rJIRKaBxoGJy3m4bOVRosw",
  authDomain: "fb-clone-21fec.firebaseapp.com",
  projectId: "fb-clone-21fec",
  storageBucket: "fb-clone-21fec.appspot.com",
  messagingSenderId: "804744261512",
  appId: "1:804744261512:web:82180134617a4f0628543d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
