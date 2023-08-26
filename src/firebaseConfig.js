import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaBJnbeC8IaffhqLq5WCr8Ha7fwAroIlQ",
  authDomain: "contact-app-9cc0d.firebaseapp.com",
  projectId: "contact-app-9cc0d",
  storageBucket: "contact-app-9cc0d.appspot.com",
  messagingSenderId: "810061495627",
  appId: "1:810061495627:web:6b043ef0905e6ffddf7cce",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
