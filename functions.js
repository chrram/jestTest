
const functions  = {
	sum: (x,y) => x+y,
	
	
	multiply: (x,y) => x*y,
	lowerCase: (str) => str.toLowerCase(),
	pushArray: (str) => {
		if((typeof str == 'string')&&(!(str instanceof Array))){
			let arrayToReturn = [];
			arrayToReturn.push(str);
			return arrayToReturn;
		}
		else{
			throw ('Error');
		}
	},
	
};



	
module.exports = functions;