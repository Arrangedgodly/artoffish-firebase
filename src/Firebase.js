// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvDrpkpeaJ_vdin2-ih5uHdZUoWgSy_Qc",
  authDomain: "artoffishal-dev.firebaseapp.com",
  projectId: "artoffishal-dev",
  storageBucket: "artoffishal-dev.appspot.com",
  messagingSenderId: "376270028706",
  appId: "1:376270028706:web:e644a8cb06daea7d88fcfb",
  measurementId: "G-W1NV6T4G0B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();