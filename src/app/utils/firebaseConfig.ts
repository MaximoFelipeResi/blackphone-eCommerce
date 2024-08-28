// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK2ncRVs2wXwgH1cJBIa-yz873hdfHri4",
  authDomain: "blackphone-firebase.firebaseapp.com",
  projectId: "blackphone-firebase",
  storageBucket: "blackphone-firebase.appspot.com",
  messagingSenderId: "38661168774",
  appId: "1:38661168774:web:736a68dc5f02b7629b7b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };