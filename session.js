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

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
        console.log('Session persistence set.');
    })
    .catch((error) => {
        console.error('Error setting session persistence:', error);
    });

auth.onAuthStateChanged((user) => {
    if (user) {
        sessionStorage.setItem('userLoggedIn', 'true');
        if (window.location.pathname === '/login.html') {
            window.location.href = 'index.html';
        }
    } else {
        sessionStorage.removeItem('userLoggedIn');
        if (window.location.pathname !== '/login.html') {
            window.location.href = 'login.html';
        }
    }
});

function logOff() {
    auth.signOut().then(() => {
        sessionStorage.removeItem('userLoggedIn');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
}

