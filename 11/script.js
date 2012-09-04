function $(el) {
    return document.getElementById(el);
}

function convert(e) {
    e.target.value = e.target.value.replace(/&/g,"and");
}

window.onload = function() {
    var i, inp, br = document.createElement("br");

    for(i = 0; i < 10; ++i) {
	inp = document.createElement("input");
	inp.style.display = "block";
	inp.style.margin = "10px";
	$("thisForm").appendChild(inp);
	$("thisForm").appendChild(br);
	inp.onblur = convert;
    }
};
