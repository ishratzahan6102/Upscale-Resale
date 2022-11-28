import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIxZEXHl4533oy1kzs0Va6VzGN2_sRTMs",
  authDomain: "phone-resell-center.firebaseapp.com",
  projectId: "phone-resell-center",
  storageBucket: "phone-resell-center.appspot.com",
  messagingSenderId: "641010347833",
  appId: "1:641010347833:web:8a95978d00e6d9bdab02e8",
  measurementId: "G-K5MJTVT7EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
