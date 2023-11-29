// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw87OK-1deZgQ2s_vhc7JspdZ6kN_laBI",
  authDomain: "kohi-4b34a.firebaseapp.com",
  databaseURL: "https://kohi-4b34a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kohi-4b34a",
  storageBucket: "kohi-4b34a.appspot.com",
  messagingSenderId: "164664064158",
  appId: "1:164664064158:web:52f051b2ee83c3d2ea638f"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = firebase.database();