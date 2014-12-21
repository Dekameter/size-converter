// Copyright (c) 2014 DekaShichi
// Ticker v0.3

var lengthItems = [
	// All units in meters
	// Based on theoretical, calcualted atomic radii http://en.wikipedia.org/wiki/Atomic_radius
	{name:"hydrogen atom", plural:"hydrogen atoms",             value:"5.3e-11"},
	{name:"push pin", plural:"push pins",                       value:"5e-3"},
	// Average between 73 mm - 76 mm
	{name:"baseball", plural:"baseballs",                       value:"7.45e-2"},
	// Based on average wooden #2 pencil
	{name:"pencil", plural:"pencils",                           value:"1.905e-1"},
	{name:"13lb bowling ball", plural:"13lb bowling balls",     value:"2.159e-1"},
	{name:"human", plural:"humans",                             value:"1.778e0"},
	{name:"midsize car", plural:"midsize cars",                 value:"5.11302e0"},
	{name:"Eiffel Tower", plural:"Eiffel Towers",               value:"3.01e+2"},
	{name:"Burj Khalifa", plural:"Burj Khalifas",               value:"8.298e+2"},
	// Both in special-case prominence and from sea level
	{name:"Mount Everest", plural:"Mount Everests",             value:"8.848e+3"},
	// Prominence from sea floor
	{name:"Mauna Kea", plural:"Mauna Keas",                     value:"1.01e+4"},
	// Prominence above Mars' datum
	{name:"Olympus Mons", plural:"Olympus Monses",              value:"2.1229e+4"},
	// Celestial bodies based on mean diameter
	{name:"Moon", plural:"Moons",                               value:"3.4742e+6"},
	{name:"Mercury", plural:"Mercuries",                        value:"4.8794e+6"},
	{name:"Mars", plural:"Marses",                              value:"6.779e+6"},
	{name:"Venus", plural:"Venuses",                            value:"1.21036e+7"},
	{name:"Earth", plural:"Earths",                             value:"1.2742e+7"},
	{name:"Neptune", plural:"Neptunes",                         value:"4.9244e+7"},
	{name:"Uranus", plural:"Uranuses",                          value:"5.0724e+7"},
	{name:"Saturn", plural:"Saturns",                           value:"1.16464e+8"},
	{name:"Jupiter", plural:"Jupiters",                         value:"1.39822e+8"},
	{name:"Sun", plural:"Suns",                                 value:"1.392684e+9"},
	{name:"Betelgeuse", plural:"Betelgeuses",                   value:"1.4971353e+12"},
	{name:"VY Canis Majoris", plural:"VY Canis Majorises",      value:"1.97761128e+12"},
	// Defined based on the Kuiper Belt
	{name:"Solar System", plural:"Solar Systems",               value:"7.47989035e+12"},
	{name:"Eagle Nebula", plural:"Eagle Nebulae",               value:"3.784292189e+17"},
	{name:"Milky Way Galaxy", plural:"Milky Way Galaxies",      value:"9.460730473e+20"},
	{name:"observable universe", plural:"observable universes", value:"8.639897228e+26"}
];

// In cubic meters
var volumeItems = [
	{name:"hydrogen atom", plural:"hydrogen atoms",            value:"7.23e-30"},
	{name:"13lb bowling ball", plural:"13lb bowling balls",    value:"4.215475177e-2"},
	{name:"human", plural:"humans",                            value:"7.1e-2"},
	// Based on 2014 Chevrolet Impala http://www.cars.com/chevrolet/impala/2014/specifications
	// Assumed Exterior Length * Height * Width / 2 (passenger volume: ~2.97327 m^3)
	// Length: 5.11302 m (201.3")
	// Width: 1.8542 m (73.0")
	// Height: 1.49606 m (58.9")
	{name:"midsize car", plural:"midsize cars",                 value:"7.091744555e0"},
	// Calculated based on lwh/3, where the base is 125 m * 125 m, and h = 324 m
	{name:"Eiffel Tower", plural:"Eiffel Towers",               value:"1.6875e+6"},
	{name:"Moon", plural:"Moons",                               value:"2.1958e+19"},
	{name:"Mercury", plural:"Mercuries",                        value:"6.083e+19"},
	{name:"Mars", plural:"Marses",                              value:"1.6318e+20"},
	{name:"Venus", plural:"Venuses",                            value:"9.28e+20"},
	{name:"Earth", plural:"Earths",                             value:"1.08321e+21"},
	{name:"Neptune", plural:"Neptunes",                         value:"6.254e+22"},
	{name:"Uranus", plural:"Uranuses",                          value:"6.833e+22"},
	{name:"Saturn", plural:"Saturns",                           value:"8.2713e+23"},
	{name:"Jupiter", plural:"Jupiters",                         value:"1.4313e+24"},
	{name:"Sun", plural:"Suns",                                 value:"1.41e+27"},
	{name:"Solar System", plural:"Solar Systems",               value:"1.402377772e+40"},
	{name:"Milky Way Galaxy", plural:"Milky Way Galaxies",      value:"3.3e+61"},
	{name:"observable universe", plural:"observable universes", value:"3.4e+80"}
]

function getNextTicker(person) {
	var tickerText = "Your character is as ";
	var DEFAULT_TEXT = tickerText;
	switch(Math.floor(Math.random() * 2)) {
		// Height
		case 0:
			do {
				tickerText = DEFAULT_TEXT;
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
			// If index is 0, exit, otherwise may cause infinite-loop.
			while(value <= 0 && index > 0);
			break;
		// Volume
		case 1:
			do {
				tickerText = DEFAULT_TEXT;
				var index = Math.floor(Math.random() * volumeItems.length);
				var item = volumeItems[index];
				var value = Math.floor(person.volume / item.value);
				tickerText += "big as " + value + " ";
				if(value == 1) {
					tickerText += item.name;
				}
				else {
					tickerText += item.plural;
				}
			}
			// If index is 0, exit, otherwise may cause infinite-loop.
			while(value <= 0 && index > 0);
			break;
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
	document.getElementById("ticker").style.textIndent = ($("#ticker").width() - $("#btnTicker").width()) + "px"; 
	$("#ticker").animate({textIndent:"-" + (tickerText.length / 2) + "em"},tickerText.length * 350,
		"linear",function() { updateTicker(getNextTicker(person)); });
}