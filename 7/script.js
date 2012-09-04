var state = [];

function $(el) {
    return document.getElementById(el);
}

function $T(el) {
    return document.getElementsByTagName(el);
}

function init() {
    var i;
    for (i = 0; i < 4; ++i) {
	state[i] = [,,,];
    }

    for (i = 0; i < 16; ++i) {
	state[ Math.floor(i/4) ][ i % 4 ] = i;

    }

}

function randomize() {
    var i, r, arr = [], res = [];
    for (i = 0; i < 16; ++i)
	arr[i] = i;
    for (i = 0; i < 16; ++i) {
	r = Math.floor(Math.random() * arr.length);
	temp = arr.splice(r - 1);
	arr = arr.concat(temp.splice(1))
	res[res.length] = temp[0];
    }
    
    for (i = 0; i < 16; ++i) {
	state[ Math.floor(i/4) ][ i % 4 ] = res[i] + 1;
    }

    r = Math.random() * 16;
    state[ Math.floor(r/4) ][ Math.floor(r%4) ] = undefined;
    
}

function check() {
    var i, flag = true;
    
    for (i = 0; i < 16; ++i) {
	
	if(state[ Math.floor(i/4) ][ i % 4 ] != i) {
	    flag = false;
	}
    }
    
    if(flag) {
	alert("You win!");
	window.location.reload();
    }

}

function swap(e) {
    var i, x, y, X, Y, t = [[0,1], [1,0], [1,2], [2,1]];
    X = parseInt(e.target.id.split("x").splice(1)[0]);
    Y = parseInt(e.target.id.split("x").splice(1)[1]);

    for (i = 0; i < t.length; ++i) {
	x = X + t[i][0] - 1;
	y = Y + t[i][1] - 1;
	if(x >= 0 && y >= 0 && x <= 3 && y <= 3)
	    if(state[x][y] === undefined) {
		state[x][y] = state[X][Y];
		state[X][Y] = undefined;
		display();
		check();
	    }
    }

}

function display() {
    var i,tr,td;
    $T("table")[0].innerHTML = "";
    for (i = 0; i < 4; ++i) {
	tr = document.createElement("tr");
	for (j = 0; j < 4; ++j) {
	    td = document.createElement("td");
	    td.setAttribute("id", "x" + i + "x" + j);
	    str = state[i][j] || " ";
	    td.innerHTML = str;
	    if(str != " ")
		td.onclick = swap;
	    tr.appendChild(td);
	}
	$T("table")[0].appendChild(tr);
    }
}

window.onload = function() {
    init();
    randomize();
    display();
};
