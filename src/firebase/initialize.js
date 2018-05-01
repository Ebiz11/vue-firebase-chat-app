
import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyDCXDiOLEMy_4-su0G1z4EFhhzfNN_Ai68",
    authDomain: "chat-ninjas.firebaseapp.com",
    databaseURL: "https://chat-ninjas.firebaseio.com",
    projectId: "chat-ninjas",
    storageBucket: "",
    messagingSenderId: "308834899489"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();