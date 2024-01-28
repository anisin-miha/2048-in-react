// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMSO5dmrGfzd2fBykx_-zdE26aUxOSK0o",
  authDomain: "buddha-e8dc8.firebaseapp.com",
  projectId: "buddha-e8dc8",
  storageBucket: "buddha-e8dc8.appspot.com",
  messagingSenderId: "865569303062",
  appId: "1:865569303062:web:e506a3b993ef068eebe337",
  measurementId: "G-6KS6R1Y1YY",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const db = getDatabase(app);
export const firestore = getFirestore(app);
