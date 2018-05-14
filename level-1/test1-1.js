
function convertToMoney(a){
	var dollar = '$';

	return (dollar+a.toFixed(2));
}
alert( convertToMoney(6.578439));