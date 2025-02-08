import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtaAYQHP6QHpm48cnHH2WgUAjxvMQ7ZdY",
  authDomain: "methamaint.firebaseapp.com",
  projectId: "methamaint",
  storageBucket: "methamaint.firebasestorage.app",
  messagingSenderId: "933028671775",
  appId: "1:933028671775:web:c58b85ee5323aa3c92402a",
  measurementId: "G-LZ4P4S1ZNZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
