import firebase from 'firebase';

var config = {
apiKey: "AIzaSyCoStWpbcRjQGy_PPMvhU8VsC3jvfuoADM",
authDomain: "itickettest-462f1.firebaseapp.com",
databaseURL: "https://itickettest-462f1.firebaseio.com",
projectId: "itickettest-462f1",
storageBucket: "itickettest-462f1.appspot.com",
messagingSenderId: "414966053777"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const db = firestore;