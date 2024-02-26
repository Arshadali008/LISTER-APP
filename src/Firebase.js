// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNIkWYDd0uf-RQYydkqzvI94XBgbYg4js",
  authDomain: "lister-counter.firebaseapp.com",
  projectId: "lister-counter",
  storageBucket: "lister-counter.appspot.com",
  messagingSenderId: "484258993411",
  appId: "1:484258993411:web:2da915215e9e632bf9c536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;