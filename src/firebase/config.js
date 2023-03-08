import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRABASE_API_KEY,
  authDomain: "kamil-photogram.firebaseapp.com",
  projectId: "kamil-photogram",
  storageBucket: "kamil-photogram.appspot.com",
  messagingSenderId: "303080540042",
  appId: process.env.REACT_APP_FIRABASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };
