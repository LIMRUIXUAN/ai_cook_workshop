import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const btn = loginForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Signing In...';
        btn.disabled = true;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // On success, redirect to dashboard
            window.location.href = 'dashboard.html';
        } catch (error) {
            console.error("Error signing in:", error);
            alert("Login failed: " + error.message);
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
});
