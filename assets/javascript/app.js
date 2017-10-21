	// Firebase configfile
	var config = {
    apiKey: "AIzaSyCamPODbQ2O5i7FF_yreLf0BTWnDQTRpk4",
    authDomain: "multiplayer-rps-33e3b.firebaseapp.com",
    databaseURL: "https://multiplayer-rps-33e3b.firebaseio.com",
    projectId: "multiplayer-rps-33e3b",
    storageBucket: "multiplayer-rps-33e3b.appspot.com",
    messagingSenderId: "993315352616"
  };

  firebase.initializeApp(config);

//Firebase Variables
  var database = firebase.database();
  var connectionsRef = database.ref("/connections");
  var connectedRef = database.ref(".info/connected");
  var chat = database.ref("/chat");	

//Connection check to disconnect when player leaves connection
  connectedRef.on("value", function(connect){
  	if (connect.val()){
  		var connected = connectionsRef.push(true);
  		connected.onDisconnect().remove();
  	}
  });

  chat.set("");

  var game = {
  	"rpsOption": ["rock", "paper", "scissor"],
  	"playerOne": {
  		"id": null,
  		"name": null,
  		"winCount": 0,
  		"lossCount": 0,
  		"choice": 0
  	}
  	"playerTwo":{
  		"id": null,
  		"name": null,
  		"winCount": 0,
  		"lossCount": 0,
  		"choice": 0  		
  	}
	"playerOneExists": false,
	"playerTwoExists": false,
	"startable": false,
	"result": "",
	"update" : {
			"remote": function(ref) {
				console.log("remote", ref);					
				$(".remotePlayerName").text(game.rP.name);
				$(".remotePlayerID").text(game.rP.id);
				$(".remotePlayerWins").text(game.rP.wins);
				$('.remotePlayerLosses').text(game.rP.losses);
			},
			"local": function(ref) {
				console.log('local', ref);
				$(".localPlayerName").text(game.lP.name);
				$(".localPlayerID").text(game.lP.id);
				$(".localPlayerWins").text(game.lP.wins);
				$('.localPlayerLosses').text(game.lP.losses);
			},
			"results": function (lRef , rRef) {
				console.log('results',  lRef , rRef)
				$('.localPlayerChoice').text(game.lP.choice);
				$('.remotePlayerChoice').text(game.rP.choice);
				$(".remotePlayerWins").text(game.rP.wins);
				$('.remotePlayerLosses').text(game.rP.losses);
				$('.localPlayerWins').text(game.lP.wins);
				$('.localPlayerLosses').text(game.lP.losses);

			},
		},
  }