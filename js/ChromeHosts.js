/**
 * Project: OneVideo
 * File: ChromeHosts
 * File Created: 16/02/18, 20:36
 * Author: Jose Luis Coyotzi Ipatzi
 * Email: jlci811122@gmail.com
 * User: xlfederalelk0lx
 * IDE: PhpStorm.
 */

var Tools = {
    isSources: function (string) {
        if($("#video").length < 1){
            if(string != ""){
                var player = JSON.parse(unescape(string));
                if(player.sources.length > 0){
                    var html = "<video id=\"video\" class=\"video-js vjs-default-skin\" controls preload=\"metadata\"  width=\""+$(document).width()+"\" height=\""+$(window).height()+"\" poster=\""+player.cover+"\" data-setup='{}'>";
                    $.each(player.sources,function (i,v) {
                        html+="<source src=\""+v.src+"\" type='"+v.type+"' label='"+v.label+"' res='"+v.label+"' />";
                    });
                    html+="</video>";
                    $(document.body).html(html);
                    $(function () {
                        $(document.body).css("padding","0px").css("margin","0px");
                        $("html").css("margin","0px").css("padding","0px");
                        $(document.body).css("overflow-x","hidden").css("overflow-y","hidden");
                        if(player.sources.length > 1){
                            videojs('video', {
                                controls: true,
                            }).videoJsResolutionSwitcher();
                        }else {
                            videojs("video", {
                                controls: true
                            });
                        }
                        $(window).resize(function () {
                            try{
                                $("#video").width($(window).width());
                                $("#video").height($(window).height());
                            }catch (f){
                                alert(f)
                            }
                        });
                    });
                }
            }
        }
    },
    cut_str: function (str,start,end) {
        if(str != undefined && str != ""){
            if(start != undefined && start != ""){
                var x = str.split(start);
                if(x.length > 1){
                    str = x[1];
                    if(end != undefined && end != ""){
                        var x = str.split(end);
                        if(x.length > 1){
                            return x[0];
                        }
                    }
                }
            }
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
        if (location.host == "streamango.com") {
            var data = location.toString().split("/");
            if(data[3] == "f" || data[3] == "embed"){
                this.Streamango();
            }
            Tools.isSources(location.hash.replace("#",""));
        }
        if(location.host == "www.flashx.sx"){
            this.Flashx();
            Tools.isSources(location.hash.replace("#",""));
        }
        if(location.host == "vidoza.net"){
            this.Vidoza();
            Tools.isSources(location.hash.replace("#",""));
        }
        if(location.host == "bdupload.info"){
            this.BduploadInfo();
            Tools.isSources(location.hash.replace("#",""));
        }
    },
    BduploadInfo: function () {
        if($("#downloadbtn").length > 0){
            $("body").on('DOMSubtreeModified', ".seconds", function() {
                if($(this).html() == 1){
                    $("form[name='F1']").submit();
                }
            })
        }
        var file = Tools.cut_str($(document.body).html(),"onClick=\"window.open('","'");
        if(file!="" && file != undefined){
            this.sources.push({src:file,label:"Auto",type:"video/mp4"});
            var player = {sources:this.sources};
            location.href = "https://"+location.host+"#"+escape(JSON.stringify(player));
        }
    },
    Vidoza: function () {
        if($("video").length > 0){
            var file = $("video").attr("src");
            if(file!="" && file != undefined){
                var poster = Tools.cut_str($(document.body).html(),'image: "','"');
                this.sources.push({src:file,label:"Auto",type:"video/mp4"});
                var player = {sources:this.sources,cover:poster};
                location.href = "https://"+location.host+"#"+escape(JSON.stringify(player));
            }
        }
    },
    Flashx: function () {
        if($("input[name='imhuman']").length > 0){
            setTimeout(function () {
                $("input[name='imhuman']").click();
            },5000);
        }
        if($(".vjs-fluid").length > 0){
            var file = $("video").attr("src");
            if(file!="" && file != undefined){
                var poster = $("video").attr("poster");
                this.sources.push({src:file,label:"Auto",type:"video/mp4"});
                var player = {sources:this.sources,cover:poster};
                location.href = "https://"+location.host+"#"+escape(JSON.stringify(player));
            }
        }
    },
    Streamango: function () {
        var file = $("video").attr("src");
        if(file!="" && file != undefined){
            var poster = $("video").attr("poster");
            this.sources.push({src:file,label:"Auto",type:"video/mp4"});
            var player = {sources:this.sources,cover:poster};
            location.href = "https://"+location.host+"#"+escape(JSON.stringify(player));
        }
    },
    Rapidvideo: function () {
        var poster = $("#videojs").attr("poster");
        var file = $("#videojs source").attr("src");
        if(file != ''){
            var re = /rapidvideo\.com\/(\.*)/gi;
            var qualities = $("body").html().match(re);
            this.sources.push({src:file,label:"360",type:"video/mp4"});
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
    alert(e);
}