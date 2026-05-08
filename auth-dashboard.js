import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            console.log("User is signed in:", user.email);
            // Optionally display user info on the dashboard
            // document.getElementById('user-email').textContent = user.email;
        } else {
            // User is signed out, redirect to login
            console.log("No user signed in. Redirecting...");
            window.location.href = 'auth.html';
        }
    });

    // Handle logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signOut(auth).then(() => {
                // Sign-out successful, redirect will happen via onAuthStateChanged
            }).catch((error) => {
                console.error("Error signing out:", error);
            });
        });
    }
});
