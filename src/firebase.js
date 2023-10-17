// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeMH9rMlqGWzzLDrmrKMwiFf5qpa0RRws",
  authDomain: "knscardsolution.firebaseapp.com",
  projectId: "knscardsolution",
  storageBucket: "knscardsolution.appspot.com",
  messagingSenderId: "877419255068",
  appId: "1:877419255068:web:163837d91ce909165296d9",
  measurementId: "G-65F2LNVKYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
