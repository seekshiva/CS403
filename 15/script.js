var image, cell;

function $(el) {
    return document.getElementById(el);
}

function Xew(txt) {
    return function () {
	alert(txt);
    };
}

window.onload = function () {
    $("the_image").onclick = new Xew("You clicked on an image.");
    $("the_one").onclick = new Xew("You clicked the table.");
};
