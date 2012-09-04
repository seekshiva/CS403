function $(el) {
    return document.getElementById(el);
}

window.onload = function() {
    $("go").onclick = function() {
	var str = $("inp").value;
	$("area").value = str.split(" ")[0].split(")")[0].split("(")[1];
	$("phNo").value = str.split(" ")[1].split("-").join("");
    }
};
