// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCPFfXgyufwOXBJQBMlL1NJnhRMq01eUjs",
  authDomain: "store-b73e2.firebaseapp.com",
  projectId: "store-b73e2",
  storageBucket: "store-b73e2.firebasestorage.app",
  messagingSenderId: "890319222322",
  appId: "1:890319222322:web:88883813a78c56984eae2b",
  measurementId: "G-ZFJVJ9DFT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
