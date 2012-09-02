var date, month, year;

function $(el) {
    return document.getElementById(el);
}

function init() {
    var i, opt;
    date = $("date");
    month = $("month");
    year = $("year");
    
    for (i = 1; i <= 31; ++i) {
	opt = document.createElement("option");
	opt.innerHTML = i;
	date.appendChild(opt);
    }
    for (i = 1; i <= 12; ++i) {
	opt = document.createElement("option");
	opt.innerHTML = i;
	month.appendChild(opt);
    }
    for (i = 1900; i <= (new Date()).getFullYear(); ++i) {
	opt = document.createElement("option");
	opt.innerHTML = i;
	year.appendChild(opt);
    }
}

window.onload = function () {
    init();
    $("okay_button").onclick = function () {
	var next, age, days_to_go, diff, dob = new Date($("year").value, $("month").value - 1, $("date").value);

	// Calculate the next birthday
	next = new Date(new Date.getFullYear(), $("month").value - 1, $("date").value);
	if (next - (new Date()) === 0) {
	    alert("Happy Birthday!");
	} else if (next - (new Date()) < 0) {
	    next = new Date(new Date.getFullYear() + 1, ($("month").value - 1), $("date").value);
	}
	// Calculate age and days_to_go
	diff = (new Date()) - dob; // the difference in millisecond
	age = parseInt(diff / 1000 / 60 / 60 / 24 / 356, 10);
	
	diff = next - new Date(); // the difference in millisecond
	days_to_go = parseInt(diff / 1000 / 60 / 60 / 24, 10);
	
	alert("Your age is " + age + ". And there is still " + days_to_go + " days left for your next birthday!");
    };
};

