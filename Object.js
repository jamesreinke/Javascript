/*
	Object Literals
*/

var empty_object = {};
// An object literal is a pair of curly braces surrounding zero or more name/value pairs
var stooge = {
	firstname: "Jerome",
	lastname: "Howard"
};

// Obtaining values from an expression... or other object literal
var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};

/*
	Retrieval
*/
stooge["firstname"]  // "Jerome"
flight.departure.IATA	// "SYD"

// Returns undefined if trying to access a nonexistent member
stooge["middlename"] // undefined
flight.status	// undefined
stooge["FIRSTNAME"]	// undefined

// The || operator can be used to fill in default values
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

// Attempting to retrieve undefined values throws a TypeError.  We can use '&&'
flight.equipment // undefined
flight.equipment.model // throw "TypeError"
flight.equipment && flight.equipment.model	// undefined

/*
	Update
*/
stooge["firstname"] = "Jerome"; // update

// If the object does not have the property, it is augmented
stooge["middlename"] = "Lester";
stooge.nickname = "Curly";
flight.equipment = {
	model: 'Boeing 777'
};
flight.status = 'overdue';

/*
	Reference
*/
// Objects are passed around by reference... never copied
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;  // nick is "curly" because x and stooge reference the same object

var a = {}. b = {}. c = {};  // each refer to different empty object
a = b = c = {};  // same object

/*
	Prototype
*/
// All objected created from object literals are linked to Object.prototype
// When you create an object, you can select its prototype
if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);
// Prototype link has no effect on updating; only used in retrieval for finding default values
another_stooge['firstname'] = 'Harry';
another_stooge['middlename'] = 'Moses';
another_stooge.nickname = 'Moe';
// Prototypes are dynamic; if we add to a prototype, all objects based on that prototype obtain that value
stooge.profession = 'actor';
another_stooge.profession // 'actor'

/*
	Reflection
*/
