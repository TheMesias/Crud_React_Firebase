import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'
import {getAuth } from 'firebase/auth'; 
const firebaseConfig = {
  apiKey: "AIzaSyA5Kpyno-yU81iC8aiKxI4j2KCgsyxov5Y",
  authDomain: "crud-firebase-test-3c80e.firebaseapp.com",
  projectId: "crud-firebase-test-3c80e",
  storageBucket: "crud-firebase-test-3c80e.appspot.com",
  messagingSenderId: "846417233557",
  appId: "1:846417233557:web:27cade3a8dda46ea3d3d9c",
  measurementId: "G-GWN0MJX6M3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
console.log(db)
export const auth = getAuth(app)
console.log(auth)