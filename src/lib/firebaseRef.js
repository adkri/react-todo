import * as firebase from 'firebase'

var config = {
   apiKey: "AIzaSyAQaV6c2mv3XbPdFC6FApbR8Dwv1QiPCTo",
   authDomain: "todo-f8fc5.firebaseapp.com",
   databaseURL: "https://todo-f8fc5.firebaseio.com",
   storageBucket: "todo-f8fc5.appspot.com",
   messagingSenderId: "362589393530"
 };

firebase.initializeApp(config);

export const firebaseRef  = firebase.database()
