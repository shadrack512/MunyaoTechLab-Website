// js/auth.js

import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Handle Sign-Up
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm.querySelector("input[type='email']").value;
    const password = signupForm.querySelector("input[type='password']").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully!");
        window.location.href = "login.html"; // Redirect to login
      })
      .catch((error) => {
        alert("Sign-Up Failed: " + error.message);
      });
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in successfully!");
        window.location.href = "index.html"; // Redirect to home or dashboard
      })
      .catch((error) => {
        alert("Login Failed: " + error.message);
      });
  });
}
