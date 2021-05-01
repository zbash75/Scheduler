import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCqkVHBI560_CjX-C2Ge4_AY0FKDEa--nw",
    authDomain: "scheduler-17a88.firebaseapp.com",
    databaseURL: "https://scheduler-17a88-default-rtdb.firebaseio.com",
    projectId: "scheduler-17a88",
    storageBucket: "scheduler-17a88.appspot.com",
    messagingSenderId: "979510186328",
    appId: "1:979510186328:web:8d9c61f6e22b7c9ef5552d",
    measurementId: "G-RHHDPEX1NP"
};

firebase.initializeApp(firebaseConfig);

export { firebase };