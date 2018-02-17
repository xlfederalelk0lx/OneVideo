/**
 * Project: OneVideo
 * File: ChromeScript.js
 * File Created: 16/02/18, 10:44
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */

var OneVideo = {
    maste: "https://raw.githubusercontent.com/xlfederalelk0lx/OneVideo/master/js/ChromeServers.js",
    __constructor: function () {
        OneVideo.setCookie("OneVideo.Player","",-1000);
        var tag = document.createElement("script");
        tag.type = "text/javascript";
        tag.src = "//code.jquery.com/jquery-3.3.1.slim.min.js";
        window.document.head.appendChild(tag);
        this.GithubRepo();
    },
    GithubRepo: function () {
        axios.get("https://api.github.com/repos/xlfederalelk0lx/OneVideo/branches").then(function (value) {
            if (value.data[0].commit.url != undefined && value.data[0].commit.url != '') {
                axios.get(value.data[0].commit.url).then(function (value2) {
                    if (value2.data.files.length > 0) {
                        var file = value2.data.files[0];
                        if (file.filename == "js/ChromeServers.js") {
                            OneVideo.TagScriptText(file.raw_url);
                        } else {
                            OneVideo.TagScriptText(OneVideo.maste);
                        }
                    }
                });
            }
        });
    },
    TagScriptText: function (src) {
        axios.get(src).then(function (github) {
            var tag = document.createElement("script");
            tag.type = "text/javascript";
            tag.text = github.data;
            window.document.head.appendChild(tag);
        });
    },
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; domain="+location.host;
    }
};


try {
    window.onload = OneVideo.__constructor();
} catch (e) {
    console.log(e);
}