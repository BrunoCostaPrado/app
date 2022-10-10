// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9u9M1kSHFFHTOSh791tXwkHjg5DtaIz4",
  authDomain: "aapp-59a50.firebaseapp.com",
  projectId: "aapp-59a50",
  storageBucket: "aapp-59a50.appspot.com",
  messagingSenderId: "591028621760",
  appId: "1:591028621760:web:cc9f19a329b82113987825",
  measurementId: "G-M6JSFWPDHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);