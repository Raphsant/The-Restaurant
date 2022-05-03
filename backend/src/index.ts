import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Z0LJMUtB5MiGcHH9HNfT6WDUP04JYq8",
  authDomain: "iam-team-41971.firebaseapp.com",
  projectId: "iam-team-41971",
  storageBucket: "iam-team-41971.appspot.com",
  messagingSenderId: "205642370132",
  appId: "1:205642370132:web:1dbb068c424994c8dbf1c1",
};

const appFirebase: any = initializeApp(firebaseConfig);
const db: any = getFirestore(appFirebase);
const app: any = express();
const port: number = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
