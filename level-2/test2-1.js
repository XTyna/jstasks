
function bandNameGenerator(str) {
	stringTo = str.charAt(0).toUpperCase() + str.substr(1);
	if(str[0]=== str[str.length-1]) {
		return stringTo + str.slice(1);
	} else {
		return 'The ' + stringTo;
	}
}

console.log(bandNameGenerator('tatyt'));
console.log(bandNameGenerator('taty'));
