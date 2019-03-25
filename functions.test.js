const functions = require('./functions');


describe ("First set of unit tests", () => {
	
	beforeEach(() => {
		 return expect(functions.sum(1, 1)).toBe(2);
	});

	test('adds 6 + 3 to equal 9', () => {
		expect(functions.sum(6, 3)).toBe(9);
	});

	test('adds 3 * 2 to equal 6', () => {
		expect(functions.multiply(3, 2)).toBe(6);
	});

	test('checks if the function turns "HELLO" to "hello"', () => {
		expect(functions.lowerCase("HELLO")).toBe("hello");
	});

	test('checks if the returned array contains right input', () => {
		expect(functions.pushArray("pushTest")).toContain('pushTest');
		expect(functions.pushArray("123")).toContain('123');
	});
	
	test('checks if the array handles wrong input type correctly', () => {		
		function error1() {
			functions.pushArray(2)
		}
		function error2() {
			functions.pushArray(["e"])
		}
		function error3() {
			functions.pushArray(["e","a"])
		}
			
		expect(error1).toThrowError('Error');
		expect(error1).toThrowError(/Error/);
		expect(error1).toThrowError(new Error('Error'));
		
		expect(error2).toThrowError('Error');
		expect(error2).toThrowError(/Error/);
		expect(error2).toThrowError(new Error('Error'));
		
		expect(error3).toThrowError('Error');
		expect(error3).toThrowError(/Error/);
		expect(error3).toThrowError(new Error('Error'));
	});
	
	test("returns undefined by default", () => {
		const mock = jest.fn();
		let result = mock("foo");

		expect(result).toBeUndefined();
		expect(mock).toHaveBeenCalled();
		expect(mock).toHaveBeenCalledTimes(1);
		expect(mock).toHaveBeenCalledWith("foo");
	});
	
	
})
