import firebase from 'firebase';
require('firebase/firestore');
require("firebase/functions");

var config = {
apiKey: "AIzaSyCoStWpbcRjQGy_PPMvhU8VsC3jvfuoADM",
authDomain: "itickettest-462f1.firebaseapp.com",
databaseURL: "https://itickettest-462f1.firebaseio.com",
projectId: "itickettest-462f1",
storageBucket: "itickettest-462f1.appspot.com",
messagingSenderId: "414966053777"
};
firebase.initializeApp(config);

// var config = {
// apiKey: "AIzaSyBZIMeK5f7DNKoLXPC1GrwXM7XDdSNTYMQ",
// authDomain: "iticketfirestore.firebaseapp.com",
// databaseURL: "https://iticketfirestore.firebaseio.com",
// projectId: "iticketfirestore",
// storageBucket: "iticketfirestore.appspot.com",
// messagingSenderId: "780840714978"
// };
// firebase.initializeApp(config);

export const db = firebase.firestore();