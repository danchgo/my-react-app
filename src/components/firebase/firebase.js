// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5cMdrISZsg26B1e0o-gp-U_FbTHfA0iw",
  authDomain: "my-react-app-de3d7.firebaseapp.com",
  projectId: "my-react-app-de3d7",
  storageBucket: "my-react-app-de3d7.appspot.com",
  messagingSenderId: "818830044951",
  appId: "1:818830044951:web:1b92e089e4a3db99de9152",
  measurementId: "G-YJBJ9Y84SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

export default app;