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
        if(location.host == "rapidvideo.com"){
            this.Rapidvideo();
        }
    },
    Rapidvideo: function () {
        alert(0)
    }
};

try{
    if(window.jQuery) {
        $(function () {
            Servers.__constructor();
        });
    }
}catch (e){
    console.log(e)
}