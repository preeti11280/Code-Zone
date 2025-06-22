// Importing Firebase
import {initializeApp} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBap8-ngDwd-c9w_ZTpsDJPrK5KbynU7f0",
  authDomain: "login-page-587ad.firebaseapp.com",
  projectId: "login-page-587ad",
  storageBucket: "login-form-724dd.appspot.com",
  messagingSenderId: "191757110498",
  appId: "1:191757110498:web:0899045f259a14fe19e2bb",
  measurementId: "G-8LFDHFXTGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const signUp=document.getElementById('submitSignUp')



// Show message function
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}



// Sign Up Logic
const signup = document.getElementById('submitSignUp');
signup.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('rEmail').value;
  const password = document.getElementById('rPassword').value;
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName
      };

      showMessage('Account Created Successfully', 'signUpMessage');
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = 'index2.html'; // Redirect to another page
        })
        .catch((error) => {
          console.error("Error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        showMessage('Email Address Already Exists !!!', 'signUpMessage');
      } 
      else {
        showMessage('Unable to create User', 'signUpMessage');
      }
    });
});

// Sign In Logic
const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('email')
  const password = document.getElementById('password')

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showMessage('Successfully Signed In', 'signInMessage');
      localStorage.setItem('loggedInUserId',user.uid);
      window.location.href = 'index.html'; // Redirect to another page
    })
    .catch((error) => {
      const errorCode = error.code;
      if(errorCode=='auth/invalid-credential'){
        showMessage('Invalid email or password', 'signInMessage');
      }

      else{
        showMessage('Account does not Exist','signInMessage');
      }
      
    });
});



