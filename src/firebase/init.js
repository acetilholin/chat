import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    
};
const firebaseapp = firebase.initializeApp(config);
export default firebaseapp.firestore()

