import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    if (!registerForm) return;

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const btn = registerForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Creating Account...';
        btn.disabled = true;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // On success, redirect to dashboard
            window.location.href = 'dashboard.html';
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Registration failed: " + error.message);
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
});
