/**
 * Project: OneVideo
 * File: ChromeEvents.js
 * File Created: 16/02/18, 10:42
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */

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
    var url = new URL(tab.url);
    if(tab.status == "loading"){
        chrome.cookies.set({name:"OneVideo.Player",domain:url.host,expirationDate:0,value:""});
    }
    if (tab.status == 'complete') {
        chrome.cookies.getAll({name:"OneVideo.Player",domain:url.host},function (cookies) {
            if(cookies.length > 0){
                chrome.tabs.update(tabId,{url:"http://localhost/onevideo_player?player="+escape(JSON.stringify(cookies[0].value))});
            }
        });
    }
});
