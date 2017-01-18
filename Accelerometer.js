

var watchID = null;

//I onLoad tilføjes eventlistener

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

//kalder startfunktionen når enheden er klar

function onDeviceReady() {
	startWatch();
}

//måler acceleration i bestemte intervaller

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
	var accX = acceleration.x;
	var accY = acceleration.y;
	var accZ = acceleration.z;
	var timestamp = acceleration.timestamp;
	xdocument.getElementById('accelerometer').innerHTML = 
	'Acceleration X: ' + accX + '<br />' +
	'Acceleration Y: ' + accY + '<br />' +
	'Acceleration Z: ' + accZ + '<br />' +
	'Timestamp: ' + timestamp + '<br />';
}
function onError() {
	alert('onError!');
}