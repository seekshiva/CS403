var char_stat, w_stat;

function $(el) {
    return document.getElementById(el);
}

function display() {
    var i, t, tr, td;

    // The char stats
    t = document.createElement("table");
    t.setAttribute("id", "c_stat");
    t.setAttribute("border", "1");
    t.setAttribute("cellspacing", "0");

    tr = document.createElement("tr");
    for (i = "a".charCodeAt(0); i <= "z".charCodeAt(0); ++i) {
	td = document.createElement("td");
	td.innerHTML = String.fromCharCode(i);
	tr.appendChild(td);
    }
    t.appendChild(tr);

    tr = document.createElement("tr");
    for (i = "a".charCodeAt(0); i <= "z".charCodeAt(0); ++i) {
	td = document.createElement("td");
	td.innerHTML = char_stat[i] || 0;
	tr.appendChild(td);
    }
    t.appendChild(tr);

    $("stats").innerHTML = "<h3>Char stats:</h3>";
    $("stats").appendChild(t);

    // The word stats
    t = document.createElement("table");
    t.setAttribute("id", "w_stat");
    t.setAttribute("border", "1");
    t.setAttribute("cellspacing", "0");
    tr = document.createElement("tr");
    tr.innerHTML = "<td>Word Length</td><td>Occurences</td>";
    t.appendChild(tr);

    for (i = 1; i < w_stat.length; ++i) {
	tr = document.createElement("tr");
	tr.innerHTML = "<td>" + i + "</td><td>" + (w_stat[i] || 0) + "</td>";
	t.appendChild(tr);
    }
    
    $("stats").innerHTML += "<h3>Word stats:</h3>";
    $("stats").appendChild(t);
}

function statisfy() {
    var i, c_text = $("ta").value.toLowerCase().replace(/[^a-z]/g, ''), w_text = $("ta").value.toLowerCase().replace(/[,.]/g, '').split(" ");
    char_stat = [];
    w_stat = [];
    for (i = 0; i < c_text.length; ++i) {
	char_stat[c_text[i].charCodeAt(0)] = char_stat[c_text[i].charCodeAt(0)] + 1 || 1;
    }
    for (i = 0; i < w_text.length; ++i) {
	w_stat[w_text[i].length] = w_stat[w_text[i].length] + 1 || 1;
    }
}

window.onload = function () {
    $("button").addEventListener("click", function () {
	statisfy();
	display();
    }, false);

};
