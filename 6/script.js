var $ = function(el) {
    return document.getElementById(el);
},
array = ["Red", "Green", "Blue"];

function display() {
    $("colors").innerHTML = "";
    for(var i=0;i<array.length;++i) {
	var el = document.createElement("div");
	el.style["background-color"] = array[i];
	el.style.height = "50px";
	el.style.width = "200px";
	$("colors").appendChild(el);
    }
}


window.onload = function() {
    display();

    $("update").onclick = function() {
	// Adding 2 new colors
	array[3] = "Purple";
	array[4] = "Black";
	
	display();
    };

};
