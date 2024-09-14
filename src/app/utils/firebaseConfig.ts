import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK2ncRVs2wXwgH1cJBIa-yz873hdfHri4",
  authDomain: "blackphone-firebase.firebaseapp.com",
  projectId: "blackphone-firebase",
  storageBucket: "blackphone-firebase.appspot.com",
  messagingSenderId: "38661168774",
  appId: "1:38661168774:web:736a68dc5f02b7629b7b07"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
export default firebaseConfig;
