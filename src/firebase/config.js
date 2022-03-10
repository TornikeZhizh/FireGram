import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSgVgVTOSQtULgZxKhdJzJuURNKKMmPtM",
  authDomain: "firegram-9221e.firebaseapp.com",
  projectId: "firegram-9221e",
  storageBucket: "firegram-9221e.appspot.com",
  messagingSenderId: "720764553094",
  appId: "1:720764553094:web:72f397b15eaf22cfa94e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFireStore = getFirestore(app);
const auth = getAuth(app);

export { projectStorage, projectFireStore, auth };
