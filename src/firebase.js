import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "tutorial-5a2cf.firebaseapp.com",
//   projectId: "tutorial-5a2cf",
//   storageBucket: "tutorial-5a2cf.appspot.com",
//   messagingSenderId: "585126334212",
//   appId: "1:585126334212:web:8539eafc56885e1b4c4a51"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "nckh-rfid.firebaseapp.com",
  databaseURL: "https://nckh-rfid-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nckh-rfid",
  storageBucket: "nckh-rfid.appspot.com",
  messagingSenderId: "656623428030",
  appId: "1:656623428030:web:98c148c19f8129e9f299ef",
  measurementId: "G-PQ43DR5WJX"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
