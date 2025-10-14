// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzE73pxCbywcvIAyv-ofwZikq2qW1B5Q",
  authDomain: "ai-masters-23235.firebaseapp.com",
  projectId: "ai-masters-23235",
  storageBucket: "ai-masters-23235.firebasestorage.app",
  messagingSenderId: "348259957283",
  appId: "1:348259957283:web:a1b2c3d4e5f6g7h8i9j0k1l2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;