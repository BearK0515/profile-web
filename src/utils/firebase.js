import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbkh825tjo6uJ1_zfO6tD_-2rUP0OdZu0",
  // apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "my-profile-web-92291.firebaseapp.com",
  projectId: "my-profile-web-92291",
  storageBucket: "my-profile-web-92291.appspot.com",
  messagingSenderId: "54386889065",
  // messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: "1:54386889065:web:bb44eaf351e107646eadf8",
  // appId: import.meta.env.VITE_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
