// Copyright (c) 2014 DekaShichi
// Size Converter v0.3

// Human Height: Average 18-22 year old Adult American Male
// Human Weight: Average 18-22 year old Adult American Male
// Human Volume: http://en.wikipedia.org/wiki/Orders_of_magnitude_%28volume%29

var heightUnits = [
	// All units in meters
	{name:"Miles",                value:"1.60934e+3"},
	{name:"Feet",                 value:"3.048e-1"},
	{name:"Inches",               value:"2.54e-2"},

	{name:"Kilometers",           value:"1e+3"},
	{name:"Meters",               value:"1"},
	{name:"Centimeters",          value:"1e-2"},
	{name:"Millimeters",          value:"1e-3"},
	{name:"Micrometers",          value:"1e-6"},
	{name:"Nanometers",           value:"1e-9"},
	{name:"Hydrogen Atoms",       value:"5.3e-11"},
	{name:"Planck Lengths",       value:"1.616199e-35"},

	{name:"Observable Universes", value:"8.639897228e+26"},
	{name:"Milky Way Galaxies",   value:"9.460730473e+19"},
	{name:"Solar Systems",        value:"7.47989035e+12"},
	{name:"Parsecs",              value:"3.085677581491367e+16"},
	{name:"Light Years",          value:"9.4607304725808e+15"},
	{name:"Astronomical Units",   value:"1.49597807e+11"},
	{name:"Suns",                 value:"1.392684e+9"},
	{name:"Earths",               value:"1.2742e+7"},
	{name:"Moons",                value:"3.4742e+6"},
	{name:"Humans",               value:"1.778e0"}
];

var volumeUnits = [
	// All units in cubic meters
	{name:"Cubic Miles",          value:"4.16818183e+9"},
	{name:"Cubic Feet",           value:"2.83168e-2"},
	{name:"Inches",               value:"1.63871e-5"},

	{name:"Cubic Kilometers",     value:"1e+9"},
	{name:"Cubic Meters",         value:"1"},
	{name:"Liters",               value:"1e-3"},
	{name:"Cubic Centimeters",    value:"1e-6"},
	{name:"Cubic Millimeters",    value:"1e-9"},
	{name:"Cubic Micrometers",    value:"1e-18"},
	{name:"Cubic Nanometers",     value:"1e-27"},
	{name:"Hydrogen Atoms",        value:"7.23e-30"},
	{name:"Planck Volumes",        value:"4.22419e-105"},

	{name:"Observable Universes", value:"3.4e+80"},
	{name:"Milky Way Galaxies",   value:"3.3e+61"},
	{name:"Solar Systems",        value:"1.402377772e+40"},
	{name:"Suns",                 value:"1.41e+27"},
	{name:"Earths",               value:"1.08321e+21"},
	{name:"Moons",                value:"2.1958e+19"},
	{name:"Humans",               value:"7.1e-2"}
];

// Technically mass
var weightUnits = [
	// All units in kilograms
	{name:"Tons (Long)",          value:"1.01605e+3"},
	{name:"Tons (Short)",         value:"9.07185e+2"},
	{name:"Stones",               value:"6.35029e0"},
	{name:"Pounds",               value:"4.53592e-1"},
	{name:"Ounces",               value:"2.834952313e-2"},

	{name:"Tonnes (Metric)",      value:"1e+3"},
	{name:"Kilograms",            value:"1"},
	{name:"Grams",                value:"1e-3"},
	{name:"Milligrams",           value:"1e-6"},
	{name:"Micrograms",           value:"1e-9"},
	{name:"Nanograms",            value:"1e-12"},

	{name:"Atomic mass units",    value:"1.660538921e-27"},
	{name:"Electronvolts",        value:"1.782662e-36"},

	// Based on steady-state calculaions by Fred Hoyle. Assumes matter (ordinary,
	// neutrinos, dark matter) at 31.7% of total mass/energy (2.48e+54 kg)
	{name:"Observable Universes", value:"1.45e+53"},
	// Average between 0.8 - 1.5 * 10^12 Solar Masses , including Dark Matter
	{name:"Milky Way Galaxies",   value:"2.2868325e+42"},
	{name:"Solar Systems",        value:"1.99133397e+30"},
	{name:"Solar masses (Suns)",  value:"1.98855e+30"},
	{name:"Earths",               value:"5.97219e+24"},
	{name:"Moons",                value:"7.3477e+22"},
	{name:"Humans",               value:"8.83e+1"}
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

	// Based on steady-state calculaions by Fred Hoyle.
	// Assumes total mass/energy of the observable universe (e.g. ordinary, neutrinos,
	// dark matter, dark energy) @ 2.48e+54 kg
	{name:"Observable Universes",           value:"2.228912843e+71"},
	// Average between 0.8 - 1.5 * 10^12 Solar Masses , including Dark Matter
	{name:"Milky Way Galaxies",             value:"2.055302552e+59"},
	{name:"Solar Systems",                  value:"1.789721718e+47"},
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
var DEFAULT_PERSON = {
	height:"1.778", // In m
	weight:"88.3", // In kg
	volume:"7.1e-2", // In m^3
	energyOutput:"60", // In Watts
	foodIntake:"8.368e+6", // In Joules
	foodStepForce:"932", // In Newtons
	soleSurfaceArea:"",
	walkHeight:"1.016e-1", // In m
	legWeightPercentage:"0.1" // Equivalent to 10%
};

var person = {
	height:"1.778",
	weight:"88.3",
	volume:"7.1e-2",
	energyOutput:"60",
	foodIntake:"8.368e+6"
};

var comparePerson = {
	height:"1.778",
	weight:"88.3",
	volume:"7.1e-2",
	energyOutput:"60",
	foodIntake:"8.368e+6"
}

var EARTH_CRUST_SHEAR_MODULUS = 32e+9; // In Pascals
var EARTH_MANTLE_SHEAR_MODULUS = 75e+9; // In Pascals
var EARTH_GRAVITY_ACCELERATION = 9.80665; // In m / s

$(document).ready(function() {
	setFields();
	setEvents();
	$("#changelog").hide().load("changelog.txt");
	$("#btnChangelog").click(function() { $("#changelog").toggle(); });
	$("#changelog").click(function() { $(this).toggle(); });
	updateTicker(getNextTicker(person));
	$("#btnTicker").click(function() { updateTicker(getNextTicker(person)); });
	$("#ticker").click(function() { updateTicker(getNextTicker(person)); });
});

function field(textFieldId, selectorId, units, defaultIndex)
{
	this.textField = document.getElementById(textFieldId);
	this.selector = document.getElementById(selectorId);
	this.units = units;
	this.defaultIndex = defaultIndex;
	if(this.selector != null)
	{
		for(i = 0; i < this.units.length; i++)
		{
			var option = document.createElement("option");
			option.text = this.units[i].name;
			option.value = this.units[i].value;
			this.selector.add(option);
		}
		this.selector.options[defaultIndex].selected = true;
		this.prevUnit = this.selector.value;
	}
	else
	{
		this.prevUnit = "0";
	}
}

function setFields()
{
	// Defaults to "Feet"
	oldHeightField = new field("txtOldHeight","selOldHeight",heightUnits,1);
	newHeightField = new field("txtNewHeight","selNewHeight",heightUnits,1);

	// Defaults to "Cubic Meters"
	oldVolumeField = new field("txtOldVolume","selOldVolume",volumeUnits,
		volumeUnits.map(function(e) { return e.name; }).indexOf("Cubic Meters"));
	newVolumeField = new field("txtNewVolume","selNewVolume",volumeUnits,
		volumeUnits.map(function(e) { return e.name; }).indexOf("Cubic Meters"));

	// Defaults to "Pounds"
	oldWeightField = new field("txtOldWeight","selOldWeight",weightUnits,3);
	newWeightField = new field("txtNewWeight","selNewWeight",weightUnits,3);

	// Defaults to "Watts"
	oldEnergyOutField = new field("txtOldEnergyOut","selOldEnergyOut",powerUnits,4);
	energyOutField = new field("txtEnergyOut","selEnergyOut",powerUnits,4);
	// Defaults to "Food (Kilo)Calories"
	oldFoodIntakeField = new field("txtOldFoodIntake","selOldFoodIntake",energyUnits,15);
	foodIntakeField = new field("txtFoodIntake","selFoodIntake",energyUnits,15);
	//footStepMagField = new field("txtMomentMag",null,null,null);
}

function setEvents()
{
	$(oldHeightField.selector).change(function() { convertField(oldHeightField,this.value); });
	$(oldVolumeField.selector).change(function() { convertField(oldVolumeField,this.value); });
	$(oldWeightField.selector).change(function() { convertField(oldWeightField,this.value); });
	
	$(newHeightField.selector).change(function() { convertField(newHeightField,this.value); });
	$(newVolumeField.selector).change(function() { convertField(newVolumeField,this.value); });
	$(newWeightField.selector).change(function() { convertField(newWeightField,this.value); });

	$(energyOutField.selector).change(function() { convertField(energyOutField,this.value); });
	$(foodIntakeField.selector).change(function() {
		var unit = getFoodUnit(this);
		convertField(foodIntakeField,unit);
	});

	$("#advOptions").hide();
	$("#chkAdvOptions").click(function() { $("#advOptions").toggle(); });

	$("#btnConvert").click(function() {
		convert();
		updateTicker(getNextTicker(person));
	});
}

function convert()
{
	var oldHeight = oldHeightField.textField.value * oldHeightField.selector.value;
	var oldWeight = oldWeightField.textField.value * oldWeightField.selector.value;
	person.height = newHeightField.textField.value * newHeightField.selector.value;
	// Weight/mass increases 3-dimensionally. E.g. a person twice their size
	// increases their weight/mass by a factor of 8.
	person.weight = cubicConvert(oldHeight,person.height,oldWeight);

	var oldVolume = DEFAULT_PERSON.volume;
	var oldEnergyOutput = DEFAULT_PERSON.energyOutput;
	var oldFoodIntake = DEFAULT_PERSON.foodIntake;
	if(document.getElementById("chkAdvOptions").checked)
	{
		oldVolume = oldVolumeField.textField.value * oldVolumeField.selector.value;
		oldEnergyOutput = oldEnergyOutField.textField.value * oldEnergyOutField.selector.value;
		oldFoodIntake = oldFoodIntakeField.textField.value * oldFoodIntakeField.selector.value;
	}

	person.volume = cubicConvert(DEFAULT_PERSON.height, person.height,
		oldVolume)
	person.energyOutput = cubicConvert(DEFAULT_PERSON.height, person.height,
		oldEnergyOutput);
	person.foodIntake = cubicConvert(DEFAULT_PERSON.height, person.height,
		oldFoodIntake);
	
	// Basing this on gravitational potential energy, where a lifted foot when walking has potential energy.
	var footHeight = linearConvert(oldHeight,person.height,DEFAULT_PERSON.walkHeight);
	//var footMass = cubicConvert(oldHeight,person.height,DEFAULT_PERSON.footWeight);
	var legMass = person.weight * DEFAULT_PERSON.legWeightPercentage;
	var footStepEnergy = legMass * footHeight * 9.80665;
	// Based on these equations http://www.ajdesigner.com/phpseismograph/earthquake_seismometer_equation_energy_moment.php
	var seismicMoment = 20000 * footStepEnergy;
	// Returns a dimensionless number.
	var momentMagnitude = ((2 / 3) * (Math.log(seismicMoment) / Math.LN10)) - 6;

	// Set all the displayed information.
	newWeightField.selector.selectedIndex = oldWeightField.selector.selectedIndex;
	newWeightField.textField.value = person.weight / newWeightField.selector.value;

	if(document.getElementById("chkAdvOptions").checked)
	{
		newVolumeField.selector.selectedIndex = oldVolumeField.selector.selectedIndex;
		energyOutField.selector.selectedIndex = oldEnergyOutField.selector.selectedIndex;
		foodIntakeField.selector.selectedIndex = oldFoodIntakeField.selector.selectedIndex;
	}
	newVolumeField.textField.value = person.volume / newVolumeField.selector.value;

	energyOutField.textField.value = person.energyOutput / energyOutField.selector.value;
	var foodUnit = getFoodUnit(foodIntakeField.selector);
	foodIntakeField.textField.value = person.foodIntake / foodUnit;

	document.getElementById("txtMomentMag").value = momentMagnitude;
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

function convertUnit(oldUnit, newUnit)
{
	return (oldUnit / newUnit);
}

function getFoodUnit(selector)
{
	var foodUnit = selector.value;
	var index = selector.selectedIndex;
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
		foodUnit = selector.value / Math.pow(299792458,2);
		foodUnit *= 8.368e7;
	}

	return foodUnit;
}

function convertField(field, unit)
{
	var value = convertUnit(field.prevUnit,unit);
	field.textField.value = field.textField.value * value;
	field.prevUnit = unit;
}