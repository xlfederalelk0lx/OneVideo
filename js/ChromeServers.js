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
        var re = /rapidvideo\.com\/(\.*)/gi;
        var qualities = $("body").html().match(re);
        //var scripts = $("script");
        /*for(i = 0; i<scripts.length; i++){
            if($(scripts[i]).attr("crossorigin") == "anonymous"){
                $(scripts[i]).remove();
            }
            var src = $(scripts[i]).attr("src");
            if(src == '//c1.popads.net/pop.js' || src == "//c.adsco.re" ||
                    src == "/js/new.js" || src == "//ads.exdynsrv.com/popunder1000.js" || 
                    src == "//go.onclasrv.com/apu.php?zoneid=847358" || src == "//go.oclasrv.com/apu.php?zoneid=847358" ||
                    src == "/js/videojs.ads.js" || src == undefined){
                $(scripts[i]).remove();
            }
        }
        $("iframe").remove();*/
        //$("html").remove();
        $(document).append("<div id=\"mexico\"></div>");
    }
};

try{
    $(function () {
        Servers.__constructor();
    });
}catch (e){
    console.log(e)
}