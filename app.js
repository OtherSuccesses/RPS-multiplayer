var config = {
    apiKey: "AIzaSyCamPODbQ2O5i7FF_yreLf0BTWnDQTRpk4",
    authDomain: "multiplayer-rps-33e3b.firebaseapp.com",
    databaseURL: "https://multiplayer-rps-33e3b.firebaseio.com",
    projectId: "multiplayer-rps-33e3b",
    storageBucket: "multiplayer-rps-33e3b.appspot.com",
    messagingSenderId: "993315352616"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var connectionsRef = database.ref("/connections");

  var connectedRef = database.ref(".info/connected");

  