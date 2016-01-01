var num_elevators = 4;
var num_floors = 10;
var capacity = 12;
var num_people = process.argv[2] || 10;
var fs = require("fs");

var people = [];

main();

function main() {
	var output = '';

	for(var i = 0; i < num_people; i++) {
		var loc = getRandomInt(1, num_floors + 1);
		var dst;
		while((dst = getRandomInt(1, num_floors + 1)) == loc);
		people[i] = {
			"loc" : loc,
			"dst" : dst
		};
	}

	output += num_people + '\n';
	//console.log(num_people);
	for(var i = 0; i < num_people; i++) {
		output += people[i].loc+" "+people[i].dst+'\n';
		//console.log(people[i].loc+" "+people[i].dst);
	}

	fs.writeFile('test_data.txt', output);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}