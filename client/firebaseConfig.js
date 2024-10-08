// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3Ycd75NMXnsKXgQ2izonFWNXJrVH0t1g",
    authDomain: "sandipan-react-1.firebaseapp.com",
    databaseURL: "https://sandipan-react-1-default-rtdb.firebaseio.com",
    projectId: "sandipan-react-1",
    storageBucket: "sandipan-react-1.appspot.com",
    messagingSenderId: "703833726025",
    appId: "1:703833726025:web:285e36617168319212b398",
    measurementId: "G-ZNY82C1PCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);