const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
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
        if (window.location.pathname.endsWith('login.html')) {
            window.location.href = 'index.html';
        }
    } else {
        sessionStorage.removeItem('userLoggedIn');
        if (!window.location.pathname.endsWith('login.html')) {
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

