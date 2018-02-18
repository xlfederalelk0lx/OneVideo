/**
 * Project: OneVideo
 * File: ChromeEvents.js
 * File Created: 16/02/18, 10:42
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */

var Github = {
    response: "",
    Http: function (url,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                Github.response = this.responseText;
                if(typeof callback == "function"){
                    callback();
                }
            }
        };
        xhttp.open("GET",url, true);
        xhttp.send();
    }
}

chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.getAllInWindow(function (tabs) {
        for (i = 0; i < tabs.length; i++) {
            if (tabs[i].url != 'chrome://extensions/') {
                chrome.tabs.reload(tabs[i].id);
            }
        }
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.status == 'complete') {
        Github.Http("https://raw.githubusercontent.com/xlfederalelk0lx/OneVideo/master/js/ChromeHosts.js",function () {
            chrome.tabs.executeScript(tabId, {code: Github.response});
        });
    }
});

