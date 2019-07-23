var main = {}
(function(){
	var uid = null;
		
firebase.auth().onAuthStateChanged(function(user){
		if (user){
			uid = user.uid;
		}
		else{
			uid = null;
			window.location.replace("login.html")
			}
	});

function login(){
	
		var docEmail = document.getElementById("docEml").value;
		var docPass = document.getElementById("docPass").value;
	
	firebase.auth().signInWithEmailAndPassword(docEmail, docPass). catch(function){
		var errorCode = error.code;
		var errorCode = error.message;
		
		window.alert("Error: " + errorMessage)
		});
		
	}

function logOut(){
	firebase.auth().signedOut();
	
})()
