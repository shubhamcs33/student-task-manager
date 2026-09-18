// Firebase configuration for TaskFlow

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHYWH-tA6339rYsNsSqBDQozu9pjh2f3A",
  authDomain: "taskflow-d9c01.firebaseapp.com",
  projectId: "taskflow-d9c01",
  storageBucket: "taskflow-d9c01.firebasestorage.app",
  messagingSenderId: "396991686303",
  appId: "1:396991686303:web:74a6569245f9bfcf07e4aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth };