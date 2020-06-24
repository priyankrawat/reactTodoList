import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAWEPRariPneFJDyzMUtQdeI-vtsdOvCxU",
    authDomain: "todolist-7e670.firebaseapp.com",
    databaseURL: "https://todolist-7e670.firebaseio.com",
    projectId: "todolist-7e670",
    storageBucket: "todolist-7e670.appspot.com",
    messagingSenderId: "448684622785",
    appId: "1:448684622785:web:e622ffd092bcf89982a540"
  });

export { firebaseConfig as firebase };