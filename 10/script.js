var flag = true;

function $(el) {
    return document.getElementById(el);
}

window.onload = function() {
    $("thisi").onerror = function () {
	alert("Failed to load image.");
    }
    
    $("thisi").src = "./4o4.png";
};
