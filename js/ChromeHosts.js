/**
 * Project: OneVideo
 * File: ChromeHosts
 * File Created: 16/02/18, 20:36
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */

var Servers = {
    __constructor: function () {
        if (location.host == "rapidvideo.com" || location.host == "www.rapidvideo.com") {
            var data = location.toString().split("/");
            if(data[3] == "e" || data[3] == "v"){
                this.Rapidvideo();
            }
            //Tools.isSources(location.hash.replace("#",""));
        },
        Rapidvideo: function () {
            var poster = $("#videojs").attr("poster");
            var file = $("#videojs source").attr("src");
            if(file != ''){
                var re = /rapidvideo\.com\/(\.*)/gi;
                var qualities = $("body").html().match(re);
                this.sources.push({file:file,label:"360p",type:"video/mp4",default:true});
                var player = {sources:this.sources};
                alert(player)
                //location.href = "https://"+location.host+"#"+escape(JSON.stringify(player));
            }
        }
    }
};


try {
    $(function () {
        Servers.__constructor();
    });
} catch (e) {
    alert(e);
}