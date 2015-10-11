var forbiddenList = [];
function updateList() {
	var fb = localStorage["facebook"];
	var tw = localStorage["twitter"];
	var red= localStorage["reddit"];
	var tmb= localStorage["tumblr"];
	var net= localStorage["netflix"];
	var cr= localStorage["cracked"];
	var iwsmt= localStorage["iwastesomuchtime"];
	var pin= localStorage["pinterest"];
	if (fb == 'true') {
		forbiddenList["fb"]=true
	}
	else {
		forbiddenList["fb"]=false
	}
	if (tw == 'true') {
		forbiddenList["tw"]=true
	}
	else {
		forbiddenList["tw"]=false
	}
	if (red == 'true') {
		forbiddenList["red"]=true
	}
	else {
		forbiddenList["red"]=false
	}
	if (tmb == 'true') {
		forbiddenList["tmb"]=true
	}
	else {
		forbiddenList["tmb"]=false
	}
	if (net == 'true') {
		forbiddenList["net"]=true
	}
	else {
		forbiddenList["net"]=false
	}
	if (cr == 'true') {
		forbiddenList["cr"]=true
	}
	else {
		forbiddenList["cr"]=false
	}
	if (iwsmt == 'true') {
		forbiddenList["iwsmt"]=true
	}
	else {
		forbiddenList["iwsmt"]=false
	}
	if (pin == 'true') {
		forbiddenList["pin"]=true
	}
	else {
		forbiddenList["pin"]=false
	}
}
function loadOptions() {
	var fb = localStorage["facebook"];
	var tw = localStorage["twitter"];
	var red= localStorage["reddit"];
	var tmb= localStorage["tumblr"];
	var net= localStorage["netflix"];
	var cr= localStorage["cracked"];
	var iwsmt= localStorage["iwastesomuchtime"];
	var pin= localStorage["pinterest"];
	if (fb == 'true') {
		document.getElementById("facebook").checked = true;
	}
	else {
		document.getElementById("facebook").checked = false;
	}
	if (tw == 'true') {
		document.getElementById("twitter").checked = true;
	}
	else {
		document.getElementById("twitter").checked = false;
	}
	if (red == 'true') {
		document.getElementById("reddit").checked = true;
	}
	else {
		document.getElementById("reddit").checked = false;
	}
	if (tmb == 'true') {
		document.getElementById("tumblr").checked = true;
	}
	else {
		document.getElementById("tumblr").checked = false;
	}
	if (net == 'true') {
		document.getElementById("netflix").checked = true;
	}
	else {
		document.getElementById("netflix").checked = false;
	}
	if (cr == 'true') {
		document.getElementById("cracked").checked = true;
	}
	else {
		document.getElementById("cracked").checked = false;
	}
	if (iwsmt == 'true') {
		document.getElementById("iwastesomuchtime").checked = true;
	}
	else {
		document.getElementById("iwastesomuchtime").checked = false;
	}
	if (pin == 'true') {
		document.getElementById("pinterest").checked = true;
	}
	else {
		document.getElementById("pinterest").checked = false;
	}
	updateList();
}
function saveOptions() {
	var fb=document.getElementById("facebook").checked;
	var tw=document.getElementById("twitter").checked;
	var red=document.getElementById("reddit").checked;
	var tmb=document.getElementById("tumblr").checked;
	var net=document.getElementById("netflix").checked;
	var cr=document.getElementById("cracked").checked;
	var iwsmt=document.getElementById("iwastesomuchtime").checked;
	var pin=document.getElementById("pinterest").checked;
	if (fb==true){
		localStorage["facebook"]=true;
	}
	else {
		localStorage["facebook"]=false;
	}
	if (tw==true){
		localStorage["twitter"]=true;
	}
	else {
		localStorage["twitter"]=false;
	}
	if (red==true){
		localStorage["reddit"]=true;
	}
	else {
		localStorage["reddit"]=false;
	}
	if (tmb==true){
		localStorage["tumblr"]=true;
	}
	else {
		localStorage["tumblr"]=false;
	}
	if (net==true){
		localStorage["netflix"]=true;
	}
	else {
		localStorage["netflix"]=false;
	}
	if (cr==true){
		localStorage["cracked"]=true;
	}
	else {
		localStorage["cracked"]=false;
	}
	if (iwsmt==true){
		localStorage["iwastesomuchtime"]=true;
	}
	else {
		localStorage["iwastesomuchtime"]=false;
	}
	if (pin==true){
		localStorage["pinterest"]=true;
	}
	else {
		localStorage["pinterest"]=false;
	}
	updateList();
}
window.addEventListener('load', loadOptions);
var button=document.getElementById('save');
button.addEventListener('click',saveOptions);