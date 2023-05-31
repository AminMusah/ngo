// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTyaad4roB0kGO7LkvFNylN2HCi3_YQZY",
  authDomain: "mftngo.firebaseapp.com",
  projectId: "mftngo",
  storageBucket: "mftngo.appspot.com",
  messagingSenderId: "366222961708",
  appId: "1:366222961708:web:240f621f21d607cfeef589",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default { app, db };
