var defaultColor = "blue";

function loadOptions() {
	var forbiddenList = localStorage["forbiddenList"];

	// valid colors are red, blue, green and yellow
	if (forbiddenList) {
		favColor = defaultColor;
	}

	var select = document.getElement();
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == favColor) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select = document.getElement();
	var URLs = select.children[select.selectedIndex].value;
	localStorage["forbiddenList"] = URLs;
}
