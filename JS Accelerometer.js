//Test app
var watchID = null;

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	startWatch();
}

function startWatch(){
	var options = { frequency: 1000 };
	watchID = navigator.accelerometer.watchAcceleration( onSucces, onError, Options);
}

function stopWatch(){
	if (watchID) {
		navigate.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

function onSucces(acceleration){
	var accX = acceleration.x;
	var accY = acceleration.y;
	var accZ = acceleration.z;
	var timestamp = acceleration.timestamp;
	document.getElementById("accelerometer").innerHTML = "Acceleration x: " + accX + "<br />" +
	"acceleration y: " + accY + "<br />" +
	"acceleration z: " + accZ + "<br />" +
	"timestamp: " + timestamp + "<br />";	
}

function onError(){
	alert("onError!");
}
