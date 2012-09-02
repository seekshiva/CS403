var array = ["Red", "Green", "Blue"];

function $(el) {
    return document.getElementById(el);
}

function display() {
    var i, el;
    $("colors").innerHTML = "";
    for (i = 0; i < array.length; ++i) {
	el = document.createElement("div");
	el.style["background-color"] = array[i];
	el.style.height = "50px";
	el.style.width = "200px";
	$("colors").appendChild(el);
    }
}


window.onload = function () {
    display();
    $("update").onclick = function () { 
	array[3] = "Purple";
	array[4] = "Black"; // Adding 2 new colors
	display();
    };
};
