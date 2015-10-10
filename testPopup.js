// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');
    if (url.indexOf("facebook") > -1) {
      alert("Stop slacking OFF!")
    }

    callback(url);
  });
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

function compareURL() {
	var badurl = ""
	for () {
		badurl = forbiddenList[i]
		if (window.location.href.indexOf(badurl) > -1) {
			alert("You have tried to access a forbidden site. You are now being redirected to a Judgy Rabbit. Stop slacking OFF!");
			window.location=("http://1.bp.blogspot.com/-AKSZfnEBqrg/U1Cb_fe0jTI/AAAAAAAADmM/8giL1Zx0gBE/s1600/Lop-Eared-Pet-Rabbit.jpg")
		}
	}
}
compareURL();
