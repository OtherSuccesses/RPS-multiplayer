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
  var playerOneRef;
  var playerTwoRef;
  var playerOneTemp;
  var playerTwoTemp;

//Connection check to disconnect when player leaves connection
  connectedRef.on("value", function(connect){
  	if (connect.val()){
  		var connected = connectionsRef.push(true);
  		connected.onDisconnect().remove();
  	}
  });

  chat.set("");

//Game Object

  var game = {
  	"rpsOption": ["rock", "paper", "scissor"],
  	"playerOne": {
  		"id": null,
  		"name": null,
  		"winCount": 0,
  		"lossCount": 0,
  		"choice": 0
  	},
  	"playerTwo":{
  		"id": null,
  		"name": null,
  		"winCount": 0,
  		"lossCount": 0,
  		"choice": 0  		
  	},
  	"round": 0,
	"playerOneExists": false,
	"playerTwoExists": false,
	"startable": false,
	"result": "",

	//Update on completing a round
	"update" : {
			"local": function(ref) {
				console.log("remote", ref);					
				$("#player-1-name").text(game.playerOne.name);
				$("#player-one-wins").text(game.playerOne.winCount);
				$("#player-one-losses").text(game.playerOne.lossCount);
			},
			"remote": function(ref) {
				console.log("local", ref);
				$("#player-2-name").text(game.playerTwo.name);
				$("#player-two-wins").text(game.playerTwo.winCount);
				$("#player-two-losses").text(game.playerTwo.lossCount);
			},
			"results": function (local , remote) {
				console.log("results",  local , remote)
				$(".choices1").text(game.playerOne.choice);
				$("#player-one-wins").text(game.playerOne.wins);
				$("#player-one-losses").text(game.playerOne.losses);
				$(".choices2").text(game.playerTwo.choice);
				$("#player-two-wins").text(game.playerTwo.wins);
				$("#player-two-losses").text(game.playerTwo.losses);
			},
		},
	//Start the game function	
	"gameStart": function() {
		$("#addName").on("click", function(event){
			event.preventDefault();
			game.playerOne.name = $("name-input").val().trim();
			$("#player-one-name").text(game.playerOne.name);
			$(".waiting-one").addClass("hidden");
			game.databaseSet();
		})
	},

	"databaseSet": function(){
		database.ref("/connections").on("value", function(snapshot){
			connect=snapshot.val();
			if (connect.hasOwnProperty("player" + game.playerTwo.id)){
				playerTwoRef = connectionsRef.child("player" + game.playerTwo.id);
				playerTwoTemp = 
			}
		})
	}
  }