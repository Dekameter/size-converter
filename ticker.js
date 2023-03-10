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
	// Assuming Everest is a perfect cone, with a base of 16 km and using the
	// height above.
	{name:"Mount Everest", plural:"Mount Everests",             value:"2.371994607e+12"},
	{name:"Mauna Kea", plural:"Mauna Keas",                     value:"3.2e+12"},
	// Using the area of 295,254 km^2.
	{name:"Olympus Mons", plural:"Olympus Monses",              value:"6.563778923e+15"},
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
];

// All units in kilograms
var massItems = [
	{name:"hydrogen atom", plural:"hydrogen atoms",             value:"1.6737236e-27"},
	{name:"13lb bowling ball", plural:"13lb bowling balls",     value:"5.89670081e0"},
	{name:"human", plural:"humans",                             value:"8.83e1"},
	{name:"midsize car", plural:"midsize cars",                 value:"1.757670434e+3"},
	{name:"Eiffel Tower", plural:"Eiffel Towers",               value:"7.3e+6"},
	// Based on 500,000 short (US) tons from (assuming short, not specified, based on author):
	// http://blogs.discovermagazine.com/80beats/2010/01/04/10-things-you-didnt-know-about-the-burj-khalifa-the-new-tallest-building-in-the-world/
	{name:"Burj Khalifa", plural:"Burj Khalifas",               value:"4.5359237e+8"},
	// Using the volume above times the density of granite (2.65 to 2.75 g/cm^3
	// or ~2.7 g/cm^3 = 2700 kg/m^3)
	{name:"Mount Everest", plural:"Mount Everests",             value:"6.404385438e+15"},
	// Assuming Mauna Kea is made up of nothing but basalt (which it's not).
	// Basalt magma: 2650-2800 kg/m^3 ~= 2725 kg/m^3
	{name:"Mauna Kea", plural:"Mauna Keas",                     value:"8.72e+15"},
	// Assuming Olympus Mons is made up of nothing but basalt (see above)
	{name:"Olympus Mons", plural:"Olympus Monses",              value:"1.788629757e+19"},
	{name:"Moon", plural:"Moons",                               value:"7.3477e+22"},
	{name:"Mercury", plural:"Mercuries",                        value:"3.3022e+23"},
	{name:"Mars", plural:"Marses",                              value:"6.4185e+23"},
	{name:"Venus", plural:"Venuses",                            value:"4.8676e+24"},
	{name:"Earth", plural:"Earths",                             value:"5.97219e+24"},
	{name:"Uranus", plural:"Uranuses",                          value:"8.6810e+25"},
	{name:"Neptune", plural:"Neptunes",                         value:"1.0243e+26"},
	{name:"Saturn", plural:"Saturns",                           value:"5.6846e+26"},
	{name:"Jupiter", plural:"Jupiters",                         value:"1.8986e+27"},
	{name:"Sun", plural:"Suns",                                 value:"1.98855e+30"},
	{name:"Solar System", plural:"Solar Systems",               value:"1.99133397e+30"},
	// Technically not yet agreed upon. Using the 2011 proposal of 11.6 solar masses
	{name:"Betelgeuse", plural:"Betelgeuses",                   value:"2.306718e+31"},
	{name:"VY Canis Majoris", plural:"VY Canis Majorises",      value:"3.380535e+31"},
	// Based on 12,000 solar masses
	{name:"Eagle Nebula", plural:"Eagle Nebulae",               value:"2.38626e+34"},
	{name:"Milky Way Galaxy", plural:"Milky Way Galaxies",      value:"2.2868325e+42"},
	{name:"observable universe", plural:"observable universes", value:"1.45e+53"}
];

function getNextTicker(person) {
	var tickerText = "Your character is as ";
	var DEFAULT_TEXT = tickerText;
	switch(Math.floor(Math.random() * 3)) {
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
		// Mass
		case 2:
			do {
				tickerText = DEFAULT_TEXT;
				var index = Math.floor(Math.random() * massItems.length);
				var item = massItems[index];
				var value = Math.floor(person.weight / item.value);
				tickerText += "heavy as " + value + " ";
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