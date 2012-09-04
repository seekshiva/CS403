function $(el) {
    return document.getElementById(el);
}

window.onload = function() {
    document.body.onclick = function (e) {
	var msg = "Nothing now.";
	if (e.ctrlKey) 
	    msg = "Control: " + e;
	if (e.shiftKey) 
	    msg = "Shift: " + e.target;
	alert(msg);
    };
};
