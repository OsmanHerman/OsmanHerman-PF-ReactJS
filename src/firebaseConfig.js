import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMTXxJPPOZ2VxwKQJNY_x-ppVkz4ieGUk",
  authDomain: "proyectoshop-49cd2.firebaseapp.com",
  projectId: "proyectoshop-49cd2",
  storageBucket: "proyectoshop-49cd2.appspot.com",
  messagingSenderId: "746226092878",
  appId: "1:746226092878:web:67521bb8869fb293a7ec1f",
  measurementId: "G-Y353VFP01W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);