import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-3r8z9u1GO1KqDjov_x0KT4gFlumzLMY",
  authDomain: "ecommercedonpepe.firebaseapp.com",
  projectId: "ecommercedonpepe",
  storageBucket: "ecommercedonpepe.appspot.com",
  messagingSenderId: "574987556072",
  appId: "1:574987556072:web:970395659cb384c27c255d"
};

export const appFireStore = initializeApp(firebaseConfig);