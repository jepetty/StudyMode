var forbiddenList = [];
function updateList() {
	var fb = localStorage.getItem("facebook");
	var tw = localStorage["twitter"];
	var red= localStorage["reddit"];
	var tmb= localStorage["tumblr"];
	var net= localStorage["netflix"];
	var cr= localStorage["cracked"];
	var iwsmt= localStorage["iwastesomuchtime"];
	var pin= localStorage["pinterest"];
	var bzzf= localStorage["buzzfeed"];
	if (fb == "true") {
		forbiddenList["facebook"]=true
	}
	else {
		forbiddenList["facebook"]=false
	}
	if (tw == 'true') {
		forbiddenList["twitter"]=true
	}
	else {
		forbiddenList["twitter"]=false
	}
	if (red == 'true') {
		forbiddenList["reddit"]=true
	}
	else {
		forbiddenList["reddit"]=false
	}
	if (tmb == 'true') {
		forbiddenList["tumblr"]=true
	}
	else {
		forbiddenList["tumblr"]=false
	}
	if (net == 'true') {
		forbiddenList["netflix"]=true
	}
	else {
		forbiddenList["netflix"]=false
	}
	if (cr == 'true') {
		forbiddenList["cracked"]=true
	}
	else {
		forbiddenList["cracked"]=false
	}
	if (iwsmt == 'true') {
		forbiddenList["iwastesomuchtime"]=true
	}
	else {
		forbiddenList["iwastesomuchtime"]=false
	}
	if (pin == 'true') {
		forbiddenList["pinterest"]=true
	}
	else {
		forbiddenList["pinterest"]=false
	}
	if (bzzf == 'true') {
		forbiddenList["buzzfeed"]=true
	}
	else {
		forbiddenList["buzzfeed"]=false
	}
}
function loadOptions() {
	var fb = localStorage.getItem("facebook");
	var tw = localStorage["twitter"];
	var red= localStorage["reddit"];
	var tmb= localStorage["tumblr"];
	var net= localStorage["netflix"];
	var cr= localStorage["cracked"];
	var iwsmt= localStorage["iwastesomuchtime"];
	var pin= localStorage["pinterest"];
	var bzzf= localStorage["buzzfeed"];
	if (fb == "true") {
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
	if (bzzf == 'true') {
		document.getElementById("buzzfeed").checked = true;
	}
	else {
		document.getElementById("buzzfeed").checked = false;
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
	var bzzf=document.getElementById("buzzfeed").checked;
	if (fb==true){
		chrome.storage.sync.set({facebook: "true"}, function () {
			console.log("facebook set");
		})
	}
	else {
		chrome.storage.sync.set({facebook: "false"}, function() {
			console.log("facebook set");
		})
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
	if (bzzf==true) {
		localStorage["buzzfeed"] = true;
	}
	else {
		localStorage["buzzfeed"] = false;
	}
	updateList();
}
window.addEventListener('load', loadOptions);
var button=document.getElementById('save');
button.addEventListener('click',saveOptions);