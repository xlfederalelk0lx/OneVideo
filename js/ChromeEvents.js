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
    if (tab.status == 'complete') {
        chrome.tabs.executeScript(tabId, {file: "js/ChromeJquery.js"});
        chrome.tabs.executeScript(tabId, {file: "js/axios.js"});
        chrome.tabs.executeScript(tabId, {file: "js/ChromeScript.js"});
    }
});