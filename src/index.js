module.exports = function toReadable(number) {
	let numberArr = [];
	let readOns = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let readTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let readDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	do {
		let numNew = number % 10;
		numberArr.push(numNew);
		number = Math.floor(number / 10);
	} while (number);
	let ons;
	let dec;
	let hund;
	let lng = numberArr.length;
	switch (lng) {
		case (1):
			return readOns[numberArr[0]];
		case (2):
			if (numberArr[1] === 1) {
				return readTen[numberArr[0]];
			} else {
				let result = '';
				dec = readDec[numberArr[1] - 2];
				ons = readOns[numberArr[0]];
				result += dec;
				if (numberArr[0]) {
					result += ' ' + ons;
				}
				return result;
			}
		case (3):
			hund = readOns[numberArr[2]];
			dec = readDec[numberArr[1]];
			ons = readOns[numberArr[0]];
			let result = hund + ' ' + 'hundred';
			if (numberArr[1] === 1) {
				result += ' ' + readTen[numberArr[0]];
				return result;
			}
			else if (numberArr[1]) {
				dec = readDec[numberArr[1] - 2];
				ons = readOns[numberArr[0]];
				result += ' ' + dec;
			}
			if (numberArr[0]) {
				result += ' ' + ons;
			}
			return result;
	}
}
