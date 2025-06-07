import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
import { getDatabase , ref , set ,get, child} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyCKyQUsn5UJPf01eel09VCmzIlInIJHa3U",
  authDomain: "coding-club-formfillup.firebaseapp.com",
  projectId: "coding-club-formfillup",
  storageBucket: "coding-club-formfillup.firebasestorage.app",
  messagingSenderId: "152869476154",
  appId: "1:152869476154:web:6e1970c3eb215a0bdda203",
  measurementId: "G-3VKW32KY9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e) {
    set(ref( db, 'users/' + document.getElementById("name").value),
    {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value,
        skills: document.getElementById("skills").value,
        github: document.getElementById("github").value,
        linkedin: document.getElementById("linkedin").value
    }).then(() => {
        alert("Form submitted successfully!");
    }).catch((error) => {
        alert("Error submitting form: " + error.message);
    });
});
