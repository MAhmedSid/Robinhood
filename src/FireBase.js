import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYoNOtRRvcPD4Q7TE5hlzChvixbnPSiF4",
  authDomain: "robinhood-premium.firebaseapp.com",
  projectId: "robinhood-premium",
  storageBucket: "robinhood-premium.appspot.com",
  messagingSenderId: "406094940654",
  appId: "1:406094940654:web:5b2cad7ea9035db78da6ff",
  measurementId: "G-B82H685GFR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
