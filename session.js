// session.js
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID",
    measurementId: "YOUR_FIREBASE_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged((user) => {
    if (!user) {
        sessionStorage.removeItem('userLoggedIn');
        window.location.href = 'login.html';
    } else {
        sessionStorage.setItem('userLoggedIn', 'true');
    }
});

window.addEventListener('beforeunload', () => {
    auth.signOut().then(() => {
        sessionStorage.removeItem('userLoggedIn');
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
});

