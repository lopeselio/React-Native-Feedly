import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCucE33mJSLmzXWXxV_7rkOaJW4IpT8lM0",
    authDomain: "redwire-3f900.firebaseapp.com",
    databaseURL: "https://redwire-3f900.firebaseio.com",
    projectId: "redwire-3f900",
    storageBucket: "redwire-3f900.appspot.com",
    messagingSenderId: "713986912235",
    appId: "1:713986912235:web:db8dc75f090b6c01a133ae",
    measurementId: "G-G1X4RD6N0X"
  };

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();
const usersCollection = DB.collection('users');

export {
    firebase,
    usersCollection
}