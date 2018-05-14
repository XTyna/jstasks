function functionator(str) {
	var methods = str.split(' ');
	
	return setMethod(methods);
}

function setMethod(arr) {
	if(arr[0]) {
		return {
			[arr[0]]: function () {
				if(arr[1]) {
					return setMethod(arr.slice(1))
				} else {
					return {};
				}
			}
		}
	}

	return {}
}

