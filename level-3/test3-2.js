function functionator(str) {
	var methods = str.split(' ');
	
	return setMethod(methods);
}

function setMethod(arr) {
	if(arr[0]) {
		return {
			[arr[0]]: () => (arr[1] ? setMethod(arr.slice(1)) : {})
		}
	}

	return {}
}

var a = functionator('hello some cool person')