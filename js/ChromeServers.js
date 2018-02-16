/**
 * Project: OneVideo
 * File: ChromeServers.js
 * File Created: 16/02/18, 11:43
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */


var Servers = {
    __constructor: function () {
        if(location.host == "rapidvideo.com" || location.host == "www.rapidvideo.com"){
            this.Rapidvideo();
        }
    },
    Rapidvideo: function () {
        var poster = $("#videojs").attr("poster");
        var file = $("#videojs source").attr("src");
        var qualities = $("body").html();
        alert(qualities)
    }
};

try{
    $(function () {
        Servers.__constructor();
    });
}catch (e){
    console.log(e)
}