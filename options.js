var forbiddenList={facebook:"false", twitter:"false", reddit:"false", tumblr:"false", netflix:"false", cracked:"false", iwastesomuchtime:"false", pinterest:"false", buzzfeed:"false"};
function loadOptions() {
	document.getElementById("facebook").checked = (localStorage["facebook"]=="true");
	document.getElementById("twitter").checked = (localStorage["twitter"]=="true");
	document.getElementById("reddit").checked = (localStorage["reddit"]=="true");
	document.getElementById("tumblr").checked = (localStorage["tumblr"]=="true");
	document.getElementById("netflix").checked = (localStorage["netflix"]=="true");
	document.getElementById("cracked").checked = (localStorage["cracked"]=="true");
	document.getElementById("iwastesomuchtime").checked = (localStorage["iwastesomuchtime"]=="true");
	document.getElementById("pinterest").checked = (localStorage["pinterest"]=="true");
	document.getElementById("buzzfeed").checked = (localStorage["buzzfeed"]=="true");

	updateChromeStorage();
}
function saveOptions() {
	localStorage["facebook"]=document.getElementById("facebook").checked;
	localStorage["twitter"]=document.getElementById("twitter").checked;
	localStorage["reddit"]=document.getElementById("reddit").checked;
	localStorage["tumblr"]=document.getElementById("tumblr").checked;
	localStorage["netflix"]=document.getElementById("netflix").checked;
	localStorage["cracked"]=document.getElementById("cracked").checked;
	localStorage["iwastesomuchtime"]=document.getElementById("iwastesomuchtime").checked;
	localStorage["pinterest"]=document.getElementById("pinterest").checked;
	localStorage["buzzfeed"]=document.getElementById("buzzfeed").checked;

	updateChromeStorage();
}
function updateChromeStorage() {
	forbiddenList["facebook"]=localStorage["facebook"];
	forbiddenList["twitter"]=localStorage["twitter"];
	forbiddenList["reddit"]=localStorage["reddit"];
	forbiddenList["tumblr"]=localStorage["tumblr"];
	forbiddenList["netflix"]=localStorage["netflix"];
	forbiddenList["cracked"]=localStorage["cracked"];
	forbiddenList["iwastesomuchtime"]=localStorage["iwastesomuchtime"];
	forbiddenList["pinterest"]=localStorage["pinterest"];
	forbiddenList["buzzfeed"]=localStorage["buzzfeed"];

	chrome.storage.sync.set({fL: forbiddenList}, function() {
	})
}
window.addEventListener('load', loadOptions);
var button=document.getElementById('save');
button.addEventListener('click',saveOptions);