// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCraXq51qucrTWJlD7ZXjUodP92Aqxfh3c",
  authDomain: "munyaotech-lab.firebaseapp.com",
  projectId: "munyaotech-lab",
  storageBucket: "munyaotech-lab.appspot.com",
  messagingSenderId: "654834051986",
  appId: "1:654834051986:web:076f2f5c10cae1291baf4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
export const auth = getAuth(app);
