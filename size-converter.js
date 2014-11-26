// Copyright (c) 2014 DekaShichi

var heightUnits = [
	// All units in meters
	{name:"Miles",              value:"1.60934e+3"},
	{name:"Feet",               value:"3.048e-1"},
	{name:"Inches",             value:"0.0254e-2"},

	{name:"Kilometers",         value:"1e+3"},
	{name:"Meters",             value:"1"},
	{name:"Centimeters",        value:"1e-2"},
	{name:"Millimeters",        value:"1e-3"},
	{name:"Micrometers",        value:"1e-6"},
	{name:"Nanometers",         value:"1e-9"},

	{name:"Parsecs",            value:"3.085677581491367e+16"},
	{name:"Light Years",        value:"9.4607304725808e+15"},
	{name:"Astronomical Units", value:"1.49597807e+11"},
	{name:"Suns",               value:"1.392684e+9"},
	{name:"Earths",             value:"1.2742e+7"},
	{name:"Moons",              value:"3.4742e+6"},
	{name:"Humans",             value:"1.778e0"}
];

// Technically mass
var weightUnits = [
	// All units in kilograms
	{name:"Tons (Long)",         value:"1.01605e+3"},
	{name:"Tons (Short)",        value:"9.07185e+2"},
	{name:"Stones",              value:"6.35029e0"},
	{name:"Pounds",              value:"4.53592e-1"},
	{name:"Ounces",              value:"2.834952313e-2"},

	{name:"Tonnes (Metric)",     value:"1e+3"},
	{name:"Kilograms",           value:"1"},
	{name:"Grams",               value:"1e-3"},
	{name:"Milligrams",          value:"1e-6"},
	{name:"Micrograms",          value:"1e-9"},
	{name:"Nanograms",           value:"1e-12"},

	{name:"Atomic mass units",   value:"1.660538921e-27"},
	{name:"Electronvolts",       value:"1.782662e-36"},

	{name:"Solar masses (Suns)", value:"1.98855e+30"},
	{name:"Earths",              value:"5.97219e+24"},
	{name:"Moons",               value:"7.3477e+22"},
	{name:"Humans",              value:"8.83e+1"}
];

var energyUnits = [
	// All units in joules
	{name:"Terajoules",                     value:"1e+12"},
	{name:"Gigajoules",                     value:"1e+9"},
	{name:"Megajoules",                     value:"1e+6"},
	{name:"Kilojoules",                     value:"1e+3"},
	{name:"Joules",                         value:"1"},
	{name:"Millijoules",                    value:"1e-3"},
	{name:"Microjoules",                    value:"1e-6"},
	{name:"Nanojoules",                     value:"1e-9"},
	{name:"Picojoules",                     value:"1e-12"},

	{name:"Electronvolts",                  value:"1.602176565e-19"},

	{name:"Terawatt-Hours",                 value:"3.6e+15"},
	{name:"Gigawatt-Hours",                 value:"3.6e+12"},
	{name:"Megawatt-Hours",                 value:"3.6e+9"},
	{name:"Kilowatt-Hours",                 value:"3.6e+6"},
	{name:"Watt-Hours",                     value:"3.6e+3"},

	{name:"Food (Kilo)calories",            value:"4.184e+3"},
	{name:"Calories",                       value:"4.184e0"},

	{name:"Gigatonnes of TNT",              value:"4.184e+18"},
	{name:"Megatonnes of TNT",              value:"4.184e+15"},
	{name:"Kilotonnes of TNT",              value:"4.184e+12"},
	{name:"Tonnes of TNT",                  value:"4.184e+9"},
	{name:"Millitonnes / Kilograms of TNT", value:"4.184e+6"},
	{name:"Millitonnes / Grams of TNT",     value:"4.184e+3"},

	// Calculated by mass-energy equivalence E = mc^2, m = mass (in kg),
	// c = speed of light (in m/s)
	{name:"Tons (Long)",                    value:"9.131801994e+19"},
	{name:"Tons (Short)",                   value:"8.153372168e+19"},
	{name:"Stones",                         value:"5.707356024e+17"},
	{name:"Pounds",                         value:"4.076684916e+16"},
	{name:"Ounces",                         value:"2.547928073e+15"},

	{name:"Tonnes (Metric)",                value:"8.987551787e+19"},
	{name:"Kilograms",                      value:"8.987551787e+16"},
	{name:"Grams",                          value:"8.987551787e+13"},
	{name:"Milligrams",                     value:"8.987551787e+10"},
	{name:"Micrograms",                     value:"8.987551787e+7"},
	{name:"Nanograms",                      value:"8.987551787e+4"},

	{name:"Atomic mass units",              value:"1.49241795e-10"},
	{name:"Electronvolts",                  value:"1.60217656e-19"},

	{name:"Solar masses (Suns)",            value:"1.787219611e+47"},
	{name:"Earths",                         value:"4.468781512e+41"},
	{name:"Moons",                          value:"6.603783427e+39"},
	{name:"Humans",                         value:"7.936008228e+18"}
];

var powerUnits = [
	// All units in watts
	{name:"Terawatts",                               value:"1e+12"},
	{name:"Gigawatts",                               value:"1e+9"},
	{name:"Megawatts",                               value:"1e+6"},
	{name:"Kilowatts",                               value:"1e+3"},
	{name:"Watts",                                   value:"1"},
	{name:"Milliwatts",                              value:"1e-3"},
	{name:"Microwatts",                              value:"1e-6"},
	{name:"Nanowatts",                               value:"1e-9"},
	{name:"Picowatts",                               value:"1e-12"},

	{name:"Food (Kilo)calories per hour",            value:"8.6042065e+5"},
	{name:"Calories per hour",                       value:"8.6042065e+2"},

	{name:"Horsepower (Imperial / Mechanical)",      value:"7.457e+2"},
	{name:"Horsepower (Metric)",                     value:"7.355e+2"},
	{name:"Horsepower (Electric)",                   value:"7.46e+2"},

	{name:"Gigatonnes of TNT per hour",              value:"8.6042065e+20"},
	{name:"Megatonnes of TNT per hour",              value:"8.6042065e+17"},
	{name:"Kilotonnes of TNT per hour",              value:"8.6042065e+14"},
	{name:"Tonnes of TNT per hour",                  value:"8.6042065e+11"},
	{name:"Millitonnes / Kilograms of TNT per hour", value:"8.6042065e+8"},
	{name:"Millitonnes / Grams of TNT per hour",     value:"8.6042065e+5"},

	{name:"Suns",                                    value:"3.846e+26"}
];

// Default units based on units above.
var defaultPerson = {
	height:"1.778",
	weight:"88.3",
	volume:"",
	energyOutput:"60",
	foodIntake:"8.368e+6",
	foodStepForce:"932", // In Newtons
	soleSurfaceArea:"",
	walkHeight:"1.016e-1",
	legWeightPercentage:"0.1" // Equivalent to 10%
};

var person = {
	height:"1.778",
	weight:"88.3",
	volume:"",
	energyOutput:"60",
	foodIntake:"8.368e+6"
};

var EARTH_CRUST_SHEAR_MODULUS = 32e+9; // In Pascals
var EARTH_MANTLE_SHEAR_MODULUS = 75e+9; // In Pascals
var EARTH_GRAVITY_ACCELERATION = 9.80665; // In m / s

function convert()
{
	var oldHeight = document.getElementById("txtOldHeight").value * document.getElementById("selOldHeight").value;
	var oldWeight = document.getElementById("txtOldWeight").value * document.getElementById("selOldWeight").value;
	var newHeight = document.getElementById("txtNewHeight").value * document.getElementById("selNewHeight").value;
	// Weight/mass increases 3-dimensionally. E.g. a person twice their size
	// increases their weight/mass by a factor of 8.
	var newWeight = cubicConvert(oldHeight,newHeight,oldWeight);
	var energyOutput = cubicConvert(defaultPerson.height, newHeight,
		defaultPerson.energyOutput);
	var foodIntake = cubicConvert(defaultPerson.height, newHeight,
		defaultPerson.foodIntake);
	
	// Basing this on gravitational potential energy, where a lifted foot when walking has potential energy.
	var footHeight = linearConvert(oldHeight,newHeight,defaultPerson.walkHeight);
	//var footMass = cubicConvert(oldHeight,newHeight,defaultPerson.footWeight);
	var legMass = newWeight * defaultPerson.legWeightPercentage;
	var footStepEnergy = legMass * footHeight * 9.80665;
	// Based on these equations http://www.ajdesigner.com/phpseismograph/earthquake_seismometer_equation_energy_moment.php
	var seismicMoment = 20000 * footStepEnergy;
	// Returns a dimensionless number.
	var momentMagnitude = ((2 / 3) * (Math.log(seismicMoment) / Math.LN10)) - 6;

	document.getElementById("selNewWeight").selectedIndex = document.getElementById("selOldWeight").selectedIndex;
	document.getElementById("txtNewWeight").value = newWeight / document.getElementById("selNewWeight").value;

	document.getElementById("txtEnergyOut").value = energyOutput / document.getElementById("selEnergyOut").value;
	var foodUnit = getFoodUnit();
	document.getElementById("txtFoodIntake").value = foodIntake / foodUnit;

	document.getElementById("txtMomentMag").value = momentMagnitude;
}

function init()
{
	drawUnits();
	setDefaultUnits();
	$("#changelog").load("changelog.txt");
}

function setDefaultUnits()
{
	prevOldHeight = document.getElementById("selOldHeight").value;
	prevOldWeight = document.getElementById("selOldWeight").value;

	prevNewHeight = document.getElementById("selNewHeight").value;
	prevNewWeight = document.getElementById("selNewWeight").value;

	prevEnergyOut = document.getElementById("selEnergyOut").value;
	prevFoodIntake = document.getElementById("selFoodIntake").value;
}

function drawUnits()
{
	// Separated due to some odd JavaScript idiosyncrasies in using the same
	// option object.
	for(i = 0; i < heightUnits.length; i++)
	{
		var option = document.createElement("option");
		option.text = heightUnits[i].name;
		option.value = heightUnits[i].value;
		document.getElementById("selOldHeight").add(option);
	}
	// Set default to "Feet"
	document.getElementById("selOldHeight").options[1].selected = true;

	for(i = 0; i < heightUnits.length; i++)
	{
		var option = document.createElement("option");
		option.text = heightUnits[i].name;
		option.value = heightUnits[i].value;
		document.getElementById("selNewHeight").add(option);
	}
	// Set default to "Feet"
	document.getElementById("selNewHeight").options[1].selected = true;



	for(i = 0; i < weightUnits.length; i++)
	{
		var option = document.createElement("option");
		option.text = weightUnits[i].name;
		option.value = weightUnits[i].value;
		document.getElementById("selOldWeight").add(option);
	}
	// Set default to "Pounds"
	document.getElementById("selOldWeight").options[3].selected = true;

	for(i = 0; i < weightUnits.length; i++)
	{
		var option = document.createElement("option");
		option.text = weightUnits[i].name;
		option.value = weightUnits[i].value;
		document.getElementById("selNewWeight").add(option);
	}
	// Set default to "Pounds"
	document.getElementById("selNewWeight").options[3].selected = true;



	for(i = 0; i < powerUnits.length; i++)
	{
		var option = document.createElement("option");
		option.text = powerUnits[i].name;
		option.value = powerUnits[i].value;
		document.getElementById("selEnergyOut").add(option);
	}
	// Set default to "Watts"
	document.getElementById("selEnergyOut").options[4].selected = true;

	for(i = 0; i < energyUnits.length; i++)
	{
		var option = document.createElement("option");
		option.text = energyUnits[i].name;
		option.value = energyUnits[i].value;
		document.getElementById("selFoodIntake").add(option);
	}
	// Set default to "Pounds"
	document.getElementById("selFoodIntake").options[15].selected = true;
}

function convertUnit(oldUnit, newUnit)
{
	return (oldUnit / newUnit)
}

function getFoodUnit()
{
	var foodUnit = document.getElementById("selFoodIntake").value;
	var index = document.getElementById("selFoodIntake").selectedIndex;
	// If the selected food intake is one of the mass-equivalencies, convert
	// based on 'efficiency'.
	// And if electronvolts is not selected (an energy unit in itself).
	if(index >= 23 && index != 35)
	{
		/* First, convert from kilograms to grams.
		Then multiply by 20 kcal (an arbitrary conversion of 20 kcal / g,
		based on 37 kcal / g for fat, and 17 kcal / g for proteins.
		Then convert into the standard Joules.
		1 kg of food ~ 8.368e7 J of energy*/

		// In this case, divide out the energy by c^2 to get the mass, then
		// multiply by this constant divided by the default food intake.
		foodUnit = document.getElementById("selFoodIntake").value / Math.pow(299792458,2);
		foodUnit *= 8.368e7;
	}

	return foodUnit;
}

// Used for when comparing length, height, etc.
function linearConvert(oldHeight, newHeight, oldValue)
{
	return oldValue * (newHeight / oldHeight);
}

// Used for when comparing area, surface area, etc.
function quadraticConvert(oldHeight, newHeight, oldValue)
{
	return oldValue * Math.pow(newHeight / oldHeight,2);
}

// Used for when comparing volume, mass/weight, energy, etc.
function cubicConvert(oldHeight, newHeight, oldValue)
{
	return oldValue * Math.pow(newHeight / oldHeight,3);
}

function convertOldHeightUnit()
{
	var unit = document.getElementById("selOldHeight").value;
	var value = convertUnit(prevOldHeight,unit);
	document.getElementById("txtOldHeight").value = document.getElementById("txtOldHeight").value * value;
	prevOldHeight = unit;
}

function convertOldWeightUnit()
{
	var unit = document.getElementById("selOldWeight").value;
	var value = convertUnit(prevOldWeight,unit);
	document.getElementById("txtOldWeight").value = document.getElementById("txtOldWeight").value * value;
	prevOldWeight = unit;
}

function convertNewHeightUnit()
{
	var unit = document.getElementById("selNewHeight").value;
	var value = convertUnit(prevNewHeight,unit);
	document.getElementById("txtNewHeight").value = document.getElementById("txtNewHeight").value * value;
	prevNewHeight = unit;
}

function convertNewWeightUnit()
{
	var unit = document.getElementById("selNewWeight").value;
	var value = convertUnit(prevNewWeight,unit);
	document.getElementById("txtNewWeight").value = document.getElementById("txtNewWeight").value * value;
	prevNewWeight = unit;
}

function convertEnergyOutUnit()
{
	var unit = document.getElementById("selEnergyOut").value;
	var value = convertUnit(prevEnergyOut,unit);
	document.getElementById("txtEnergyOut").value = document.getElementById("txtEnergyOut").value * value;
	prevEnergyOut = unit;
}

function convertFoodIntakeUnit()
{
	var unit = getFoodUnit();
	var value = convertUnit(prevFoodIntake,unit);
	document.getElementById("txtFoodIntake").value = document.getElementById("txtFoodIntake").value * value;
	prevFoodIntake = unit;
}