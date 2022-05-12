// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// const app_1 = require("firebase/app");
// const firestore_1 = require("firebase/firestore");
// const firebaseConfig = {
//     apiKey: "AIzaSyA8Z0LJMUtB5MiGcHH9HNfT6WDUP04JYq8",
//     authDomain: "iam-team-41971.firebaseapp.com",
//     projectId: "iam-team-41971",
//     storageBucket: "iam-team-41971.appspot.com",
//     messagingSenderId: "205642370132",
//     appId: "1:205642370132:web:1dbb068c424994c8dbf1c1",
// };
// const appFirebase = (0, app_1.initializeApp)(firebaseConfig);
// const db = (0, firestore_1.getFirestore)(appFirebase);
// const app = (0, express_1.default)();
// const port = 3000;
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });
