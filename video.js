const firebaseConfig = {
    apiKey: "AIzaSyDohxxobIvvkI1P_f0BDrrwYtPfs8CbvWo",
    authDomain: "login-and-signup-34870.firebaseapp.com",
    projectId: "login-and-signup-34870",
    storageBucket: "login-and-signup-34870.appspot.com",
    messagingSenderId: "464772777824",
    appId: "1:464772777824:web:46a867bb9cbd14da570005",
    measurementId: "G-2J14M7JZE0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = firebase.storage();
const storageRef = storage.ref();

// Function to show the video page
function showVideoPage(path, title, description) {
    const videoRef = storageRef.child(path);
    videoRef.getDownloadURL().then((url) => {
        document.getElementById('thumbnails-section').classList.add('hidden');
        document.getElementById('video-page').classList.remove('hidden');
        
        const videoElement = document.getElementById('video');
        videoElement.src = url;
        document.getElementById('video-title').textContent = title;
        document.getElementById('video-description').textContent = description;
    }).catch((error) => {
        console.error('Error fetching video URL:', error);
    });
}

// Function to go back to the thumbnails
document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('video-page').classList.add('hidden');
    document.getElementById('thumbnails-section').classList.remove('hidden');
});