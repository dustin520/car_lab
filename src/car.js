require('locus');

// Object Constructor - Creating 'Car' w/ properties
// Below notation is same as var Car = function(make...) ...
// However, the new adult way used for Constructors 
// because it gvies the function a name, which is nice. 
function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color; 
  this.state = "off";
  this.currentOwner = "manufacturer";
  this.previousOwners = [];
  this.passengers = [];
}

// `Car#sale`
// Update current owner and previous owner array with .sale
Car.prototype.sale = function(newOwner){

	// update previous owners array
	this.previousOwners.push(this.currentOwner);

	// update current owner 
	this.currentOwner = newOwner; 
	console.log("The new owner is ",this.currentOwner,"!"); 

};

// `Car#paint`
// Update car color with .paint
Car.prototype.paint = function(newColor){
	this.color = newColor;
	return this.color; 
};

// `Car#start`
// Change state of car to 'on'
Car.prototype.start = function () { 
	this.state = "on"; 
	return this.state;
}

// `Car#off`
//  Change state of var to 'off'
Car.prototype.off = function (){
	this.state = "off";
	return this.state;
}

// `Car#driveTo`
// should `console.log` `"driving to <destination>"` if car is 'on'
Car.prototype.driveTo = function(destination) {
	if (this.state === "on") { 
		console.log("Driving to", destination); 
	}else {
		console.log("Did you forget to turn on the car..again mister")
	}
}

// `Car#park`
// if car is 'off' console.log 'parked!'
Car.prototype.park = function() {
	if(this.state === "off") {
		console.log("parked!");
	}else {
		console.log('just drop me off here');
	}
}

// `Car#pick_up`
// args 'name' and log 'driving to pick up <friend>', if 'car' is 'on'
// update passengers array 
Car.prototype.pickUp = function (name) { 
	if (this.state === "on") {
		console.log("Driving to pick up",name);
		this.passengers.push(name); 
	}else {
		console.log("are we out of gas man"); 
	}
}

// `Car#dropOff`
// args 'name' and remove them from 'passengers' array, if in array
// and only drop off if car is 'on' ? 
Car.prototype.dropOff = function (name) {
	var passengerIndex;
	if (this.state === "on") {
		passengerIndex = this.passengers.indexOf(name);
			if (passengerIndex !== -1) {
				this.passengers.splice(passengerIndex,1);
				console.log("Dropped off", name);
			}else {
				console.log(name + " is not in the car");
			};
	}else{
		console.log("..um, I think you needa turn on the engine..");
	};
};

// Create car 'beast'
var beast = new Car("Nissan", "Altima", 2009, "black");
// console.log(beast);
// console.log(beast.sale("Joe"));
// console.log(beast.sale("Bob"));
// console.log(beast.paint("red")); 
// console.log(beast.start()); 
// console.log(beast);
// beast.off();
// beast.driveTo("SF");
// beast.park(); 
// beast.start();
// beast.park();
// beast.pickUp("Jane");
// beast.pickUp("Julie");
// beast.pickUp("Jack");
// console.log(beast);
// beast.dropOff("Julie");
// beast.dropOff("Johnny");
// beast.dropOff("Jane");
// beast.dropOff("Jil");


eval(locus);

