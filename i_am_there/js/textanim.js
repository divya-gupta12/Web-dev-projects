var $ = function (id) {
    return document.getElementById(id);
};
var inc = 0;
var out = 0;
var str = 'I AM THERE';
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*(-+=[{_:;';
var t;

var anim = function () {
    inc++;
    if (inc % 7 === 0 && out < str.length) {
        $('anim').appendChild(document.createTextNode(str[out]));
        out++;
    } else if (out >= str.length) {
        $('shuffle').innerHTML = '';
        removeInterval(t);
    }
    $('shuffle').innerHTML =
        chars[Math.floor(Math.random() * chars.length)];
};

var timesRun = 0;
var interval = setInterval(function () {
    timesRun += 1;
    anim();
    if (timesRun === 70) {
        clearInterval(interval);
        $('shuffle').innerHTML = '';
    }
}, 70);
$('anim').innerHTML = '';




// t = setInterval(anim, 70);
