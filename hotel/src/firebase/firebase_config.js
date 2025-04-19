// Импортируем необходимые модули для аутентификации
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Ваша конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5vxiDcWb4Ahnigrh5FR9wsCYUFkF7kNg",
  authDomain: "hotel-fe268.firebaseapp.com",
  projectId: "hotel-fe268",
  storageBucket: "hotel-fe268.firebasestorage.app",
  messagingSenderId: "443146508227",
  appId: "1:443146508227:web:becebe3a1a1f980aa70f76",
  measurementId: "G-7MX5JSJ0KG"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Получаем объект аутентификации
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };
