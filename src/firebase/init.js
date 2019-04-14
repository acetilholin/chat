import firebase from 'firebase'
import firestore from 'firebase/firestore'



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDVBkAFjREGyQEqRchBrp05ByLUXwzx-hw",
    authDomain: "vue-chat-gk.firebaseapp.com",
    databaseURL: "https://vue-chat-gk.firebaseio.com",
    projectId: "vue-chat-gk",
    storageBucket: "vue-chat-gk.appspot.com",
    messagingSenderId: "170447472608"
};
const firebaseapp = firebase.initializeApp(config);
export default firebaseapp.firestore()

