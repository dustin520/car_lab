// must require file to be tested, and chai files with expect method to do test
var car = require('../src/car.js'),
		expect = require('chai').expect;

// need to 'describe' var method above to call function in file being tested
describe("car", function() {

	// need to do beforeEach to reset everything before each test
	// need to define specific variables for testing
	beforeEach('car', function() {
		// car.make = Nissan;
		// car.model = Altima;
		car.color = "black";
		car.state = "off";
	// not sure why some of these properties need to be commented out
	// 	and why some need to be included 
		// car.currentOwner = "manufacturer";
		car.previousOwners = [];
		car.passengers = []; 
	});

	// // test for sale - DID NOT PASS
	// // need to describe, and call method with # which is being tested
	// // need to include 'it' to state what is being tested, and a function
	// // 	to do the testing, with variables/object to call function
	// //	and chai expect method to check for property by calling it
	// // 	and referencing to what it should equal using chai = methods
	// describe("#sale", function() {
	// 	it('should update current owner, add previous current owner to previousOwner Array', function() {
	// 		car.sale('joe');
	// 		expect(car.currentOwner).to.equal('joe');
	// 		expect(car.previousOwners).to.deep.equal([manufacturer]);
	// 	})
	// })

	// test for paint - PASSED 
	describe("#paint", function() {
		it("should change color of car", function() { 
			car.paint('yellow');
			expect(car.color).to.equal('yellow'); 
		})
	})

	// test for start - PASSED
	describe('#start', function() {
		it('should turn state of car to on', function() {
			car.start();
			expect(car.state).to.equal('on');
		})
	})

	// test for off - PASSED 
	describe('#off', function() {
		it('should turn state of car to off', function() {
			car.off();
			expect(car.state).to.equal('off');
		})
	})

	// test for driveTo - DID NOT PASS
	describe('#driveTo', function() {
		it('should log drive to and destination, if state is on', function() {
			// car.state === 'on'; // how come this line doesn't work 
			car.start(); // still no pass
			expect(car.driveTo("NYC")).to.equal("Driving to NYC"); 
		})
	})

	// test for park - DID NOT PASS
	describe('#park', function() {
		it('should console log parked if state is off', function() {
			car.off();
			expect(car.park()).to.equal("parked!");
		})
	})

	// test for pickUp - NEED TO TEST
	describe('#pickUp', function() {
		it('should pickup passengers with name, if on, and add to passengers array', function() {

		})
	})

	// test for dropOff - NEED TO TEST 
	describe('#dropOff', function() {
		it('should droff off passengers by name if car on and delete from array', function() {

		})
	})


// reminder for closing brackets 
})