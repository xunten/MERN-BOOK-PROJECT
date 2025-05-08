// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk2RSrZFHvQhLqiVtgi4QsrbSGBwhxYPc",
  authDomain: "mern-book-inventory-b760d.firebaseapp.com",
  projectId: "mern-book-inventory-b760d",
  storageBucket: "mern-book-inventory-b760d.firebasestorage.app",
  messagingSenderId: "137382302592",
  appId: "1:137382302592:web:1a09e388934a5b4b306765",
  measurementId: "G-0BBW6KP654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;