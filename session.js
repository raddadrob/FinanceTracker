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

// Set authentication persistence
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    console.log("Authentication state will persist across tabs and reloads.");
}).catch((error) => {
    console.error("Error setting authentication persistence:", error);
});

// Monitor authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in:", user);
    } else {
        console.log("No user is signed in.");
        if (!window.location.pathname.endsWith('login.html')) {
            window.location.href = 'login.html';
        }
    }
});

function logOff() {
    auth.signOut().then(() => {
        console.log("User signed out.");
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
}



