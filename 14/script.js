function $(el) {
    return document.getElementById(el);
}

window.onload = function() {
    $("image").style.position = "absolute";
    window.onmousemove = function (e) {
	$("image").style.left = e.clientX + "px";
	$("image").style.top = e.clientY + "px";
    };

    document.body.onclick = function (e) {
	var msg = "Nothing now.";
	if (e.ctrlKey) 
	    msg = "Control: " + e;
	if (e.shiftKey) 
	    msg = "Shift: " + e.target;
	alert(msg);
    };
};
