import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyCWhmKafB_vCAXssEYX_q3qgl5y7VaTUQ8",
  // authDomain: "filmy-4e1c5.firebaseapp.com",
  authDomain: "filmyverse-16e23.firebaseapp.com",
  // projectId: "filmy-4e1c5",
  projectId: "filmyverse-16e23",
  // storageBucket: "filmy-4e1c5.appspot.com",
  storageBucket: "filmyverse-16e23.appspot.com",
  // messagingSenderId: "206563926562",
  messagingSenderId: "269313103128",
  // appId: "1:206563926562:web:cb0f036f3426455472e07b"
  appId: "1:269313103128:web:a957e844723031dbb17a6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;