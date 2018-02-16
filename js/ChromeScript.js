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
        /* Load Axios form CDN*/
        this.GithubRepo();
    },
    GithubRepo: function () {
        axios.get("https://api.github.com/repos/xlfederalelk0lx/OneVideo/branches").then(function (value) {
            if(value.data[0].commit.url != undefined && value.data[0].commit.url != ''){
                axios.get(value.data[0].commit.url).then(function (value2) {
                    if(value2.data.files.length > 0){
                        var file = value2.data.files[0];
                        if(file.filename == "js/ChromeServers.js"){
                            OneVideo.TagScriptText(file.raw_url);
                        }else {
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
            window.document.body.appendChild(tag);
        });
    }
};


try{
    window.onload = OneVideo.__constructor();
}catch(e){
    console.log(e);
}