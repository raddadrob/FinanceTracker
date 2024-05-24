// session.js
const firebaseConfig = {
    apiKey: "AIzaSyDy0PPpo6xMukyahC4DBCQ_ILJNROdvPWM",
    authDomain: "cockrumfinance.firebaseapp.com",
    projectId: "cockrumfinance",
    storageBucket: "cockrumfinance.appspot.com",
    messagingSenderId: "446623626941",
    appId: "1:446623626941:web:3dc1d2e435caf61d04e9d4",
    measurementId: "G-JFRC4K0BBF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged((user) => {
    if (user) {
        sessionStorage.setItem('userLoggedIn', 'true');
    } else {
        sessionStorage.removeItem('userLoggedIn');
    }
});

window.addEventListener('beforeunload', () => {
    auth.signOut().catch((error) => {
        console.error('Error signing out:', error);
    });
});



