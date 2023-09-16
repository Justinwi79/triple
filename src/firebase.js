// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkIe7s4iVxIZ9fzXjEhUZr3y2rof_5TEU",
  authDomain: "triple-4b83b.firebaseapp.com",
  projectId: "triple-4b83b",
  storageBucket: "triple-4b83b.appspot.com",
  messagingSenderId: "669208581034",
  appId: "1:669208581034:web:6d52f60cdf9ea7dfeed1d3",
  measurementId: "G-TGXFZ4EPRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);