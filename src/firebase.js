import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: "dailyfit-7f6b0",
  appId: "1:913561400687:web:0f9d492d3e501641f5e49a",
  storageBucket: "dailyfit-7f6b0.firebasestorage.app",
  apiKey: "AIzaSyA8S0p5qk6aH1FgyB6KH1DWoit9l0kDTbI",
  authDomain: "dailyfit-7f6b0.firebaseapp.com",
  messagingSenderId: "913561400687",
  measurementId: "G-V6PD7N80NJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
