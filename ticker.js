// Copyright (c) 2014 DekaShichi
// Ticker v0.2.5

var lengthItems = [
	// All units in meters
	// Based on theoretical, calcualted atomic radii http://en.wikipedia.org/wiki/Atomic_radius
	{name:"hydrogen atom", plural:"hydrogen atoms",           value:"5.3e-11"},
	{name:"push pin", plural:"push pins",                     value:"5e-3"},
	// Average between 73 mm - 76 mm
	{name:"baseball", plural:"baseballs",                     value:"7.45e-2"},
	// Based on average wooden #2 pencil
	{name:"pencil", plural:"pencils",                         value:"1.905e-1"},
	{name:"13 lb bowling ball", plural:"13 lb bowling balls", value:"2.159e-1"},
	{name:"human", plural:"humans",                           value:"1.778e0"},
	{name:"Eiffel Tower", plural:"Eiffel Towers",             value:"3.01e+2"},
	{name:"Burj Khalifa", plural:"Burj Khalifas",             value:"8.298e+2"},
	// Both in special-case prominence and from sea level
	{name:"Mount Everest", plural:"Mount Everests",           value:"8.848e+3"},
	// Prominence from sea floor
	{name:"Mauna Kea", plural:"Mauna Keas",                   value:"1.01e+4"},
	// Prominence above Mars' datum
	{name:"Olympus Mons", plural:"Olympus Monses",            value:"2.1229e+4"},
	// Celestial bodies based on mean diameter
	{name:"Moon", plural:"Moons",                             value:"3.4742e+6"},
	{name:"Earth", plural:"Earths",                           value:"1.2742e+7"},
	{name:"Saturn", plural:"Saturns",                         value:"1.16464e+8"},
	{name:"Sun", plural:"Suns",                               value:"1.392684e+9"},
	// Defined based on the Kuiper Belt
	{name:"Solar System", plural:"Solar Systems",             value:"7.47989035e+12"},
	{name:"Milky Way Galaxy", plural:"Milky Way Galaxies",    value:"9.460730473e+19"}
];

function getNextTicker(person) {
	var tickerText = "Your character is as ";
	switch(Math.floor(Math.random() * 1)) {
		// Height
		case 0:
			var index = Math.floor(Math.random() * lengthItems.length);
			var item = lengthItems[index];
			var value = Math.floor(person.height / item.value);
			tickerText += "tall as " + value + " ";
			if(value == 1) {
				tickerText += item.name;
			}
			else {
				tickerText += item.plural;
			}
	}
	tickerText += "!";

	return tickerText;
}

function updateTicker(tickerText) {
	if (tickerText == "") {
		document.getElementById("news").innerHTML = "&nbsp;";
	}
	else {
		document.getElementById("news").innerHTML = tickerText;
	}
	$("#ticker").finish();
	//document.getElementById("ticker").style.textIndent = "0";
	document.getElementById("ticker").style.textIndent = ($("#ticker").width() - $("#btnTicker").width()) + "px"; 
	$("#ticker").animate({textIndent:"-" + (tickerText.length / 2) + "em"},tickerText.length * 350,
		"linear",function() { updateTicker(getNextTicker(person)); });
}