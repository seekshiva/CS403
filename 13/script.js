function $(el) {
    return document.getElementById(el);
}

window.onload = function () {
    $("s").style.position = "absolute";
    $("s").style.top = val + "px";
    window.onmousemove = function (e) {
	$("s").style.left = e.clientX + "px";
	$("s").style.top = e.clientY + "px";
    };
    
    window.ondblclick = function () {
	window.onmousemove = null;
	$("s").style.display = "none";
	$("c").style.cursor = "default";
    };
};


