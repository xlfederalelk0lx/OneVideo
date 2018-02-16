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
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
};

var Servers = {
    __constructor: function () {
        if (location.host == "rapidvideo.com" || location.host == "www.rapidvideo.com") {
            this.Rapidvideo();
        }
    },
    Rapidvideo: function () {
        var poster = $("#videojs").attr("poster");
        var file = $("#videojs source").attr("src");
        var re = /rapidvideo\.com\/(\.*)/gi;
        var qualities = $("body").html().match(re);
        /*$(document.body).remove();
        $(document.head).remove();
        $("html").on("click", function (event) {
            event.preventDefault();
        });
        $("html").click(function (event) {
            event.preventDefault();
        });
        //$("html").html("hola munod");*/
        window.location.href = Tools.getCookie("OneVideo.Player");
    }
};

try {
    $(function () {
        Servers.__constructor();
    });
} catch (e) {
    console.log(e)
}