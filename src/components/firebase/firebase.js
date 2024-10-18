// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_8niE1KTcgOVjQPn6ORzpNMRe6np4Y6o",
  authDomain: "shadcn-project.firebaseapp.com",
  projectId: "shadcn-project",
  storageBucket: "shadcn-project.appspot.com",
  messagingSenderId: "1091383804842",
  appId: "1:1091383804842:web:3f6c4f7f51fdc3af0f61d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {app, auth}