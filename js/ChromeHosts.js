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
        $(document.body).html("hola mundo")
    }
};


try {
    $(function () {
        Servers.__constructor();
    });
} catch (e) {
    alert(e);
}