function loadOptions() {
	var forbiddenList = localStorage["forbiddenList"];
	console.log(forbiddenList,"forbidden");
	if (forbiddenList) {
		console.log("meh");
		document.getElementById("facebook").checked = true;
	}
}
function saveOptions() {
	var fb=document.getElementById("facebook").checked;
	if (fb==true){
		localStorage["forbiddenList"]=true;
		var fish= localStorage["forbiddenList"];
		console.log(fish, "fishy fishy")
	}
}
window.addEventListener('load', loadOptions);
var button=document.getElementById('save');
button.addEventListener('click',saveOptions);