import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbkh825tjo6uJ1_zfO6tD_-2rUP0OdZu0",
  authDomain: "my-profile-web-92291.firebaseapp.com",
  projectId: "my-profile-web-92291",
  storageBucket: "my-profile-web-92291.appspot.com",
  messagingSenderId: "54386889065",
  appId: "1:54386889065:web:bb44eaf351e107646eadf8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
