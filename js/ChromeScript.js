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
    __constructor: function () {
        $("head").append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js"></script>');
    }
};


$(function () {
    OneVideo.__constructor();
});