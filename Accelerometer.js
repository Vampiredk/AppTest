var watchID = null;

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	startWatch();
}

function startWatch() {
	var options = { frequency: 1000 };//vis værdi hvert sekund
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

function onSuccess(acceleration) {
	//Gem sensorværdier
	var accX = acceleration.x ;
	var accY = acceleration.y;
	var accZ = acceleration.z;
	var timestamp = acceleration.timestamp;
	color(accX,accY); //Her definerer vi hvilke værdier som ændrer farven
}

function color(x,y){
	//Hvis X er mere end 2, skift farve til Blå
	if (x > 2) {
		document.body.style.backgroundColor =  "#33ccff";
	}
	//Hvis X er mindre end -2, skift farve til rød
	else if (x < -2){
		document.body.style.backgroundColor = "rgb(255,102,0)";
	}
	//Hvis y er mere end 2, skift farve til grøn
	if (y > 2){
		document.body.style.backgroundColor = "#33cc33";
	}
	//Hvis y er mindre end -2, skift farve til brun
	else if (y < -2){
		document.body.style.backgroundColor = "#996633";
	}
	//Hvis x og y er ingen af dem, skift farve til hvid
	if (x < 2 && x > -2 && y < 2 && y > -2) {
		document.body.style.backgroundColor = "White";
	}
}

function onError() {
	alert('onError!');
}