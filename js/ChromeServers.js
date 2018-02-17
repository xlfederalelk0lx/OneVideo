/**
 * Project: OneVideo
 * File: ChromeServers.js
 * File Created: 16/02/18, 11:43
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */

var Tools = {
    getCookie: function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; domain="+location.host;
    },
    isSources: function (string) {
        if(string != ""){
            var player = unescape(string);
            alert(player);
        }
    }
};

var Servers = {
    sources: [],
    __constructor: function () {
        if (location.host == "rapidvideo.com" || location.host == "www.rapidvideo.com") {
            var data = location.toString().split("/");
            if(data[3] == "e" || data[3] == "v"){
                this.Rapidvideo();
            }
            Tools.isSources(location.hash.replace("#",""));
        }
    },
    Rapidvideo: function () {
        var poster = $("#videojs").attr("poster");
        var file = $("#videojs source").attr("src");
        if(file != ''){
            var re = /rapidvideo\.com\/(\.*)/gi;
            var qualities = $("body").html().match(re);
            this.sources.push({file:file,label:"360p",type:"video/mp4",default:true});
            var player = {sources:this.sources};
            location.href = "https://"+location.host+"#"+escape(JSON.stringify(player));
        }
    }
};

try {
    $(function () {
        Servers.__constructor();
    });
} catch (e) {
    console.log(e)
}