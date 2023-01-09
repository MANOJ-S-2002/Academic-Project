// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase/compat";
import {getDatabase} from "firebase/database"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXRKAV5uUtFC1iHnD_5zOxQomN80GKhac",
  authDomain: "spam-ae2d6.firebaseapp.com",
  projectId: "spam-ae2d6",
  storageBucket: "spam-ae2d6.appspot.com",
  messagingSenderId: "1097173850621",
  appId: "1:1097173850621:web:85f17ad6c2786d9b84e194",
  measurementId: "G-0W74K537MF",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db=getDatabase(app);

export { auth,db };
