function avgArray(arr) {
	const resultArray = [];

	for(var i = 0; i < arr[0].length; i++) {
		let newItem = 0;

		for(var j = 0; j < arr.length; j++) {
			newItem += arr[j][i];
		}
		resultArray.push(newItem / arr.length);
	}

	return resultArray;
}

alert(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3]]));