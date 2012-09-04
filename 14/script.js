function $(el) {
    return document.getElementById(el);
}

window.onload = function () {
    var val = 100;
    $("s").style.position = "absolute";
    $("s").style.top = val + "px";
    window.onmousemove = function (e) {
	val += 10;
	$("s").style.left = e.clientX + "px";
	$("s").style.top = e.clientY + "px";
    };
    
    window.ondblclick = function () {
	window.onmousemove = null;
	$("s").style.display = "none";
	$("c").style.cursor = "default";
    };
};


