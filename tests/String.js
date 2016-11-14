require('../ES6.js');
require('./suitest.js');

/**
 * ------------------------------------------------------------
 * String
 * ------------------------------------------------------------
**/


/*
 String.fromCodePoint
*/

new Suitest('String.fromCodePoint')

.test('String.fromCodePoint: 0x', function()
{
	this
		.describe("0x21 is '!'")
		.exec(String.fromCodePoint(0x21), '!')
		.done();
})

.test('String.fromCodePoint: unicode values', function()
{
	this
		.describe("107 is 'k'")
		.exec(String.fromCodePoint(107), 'k')
		.done();
})

.test('String.fromCodePoint: 0', function()
{
	this
		.describe("0 is empty string")
		.exec(String.fromCodePoint(0), String.fromCharCode(0))
		.done();
});

/*
 String.codePointAt
*/

new Suitest('codePointAt')

.test('String.codePointAt', function()
{
	this
		.describe("'A'.codePointAt(0) is 65")
		.exec('A'.codePointAt(0), 65)
		.done();
})

.test('String.codePointAt', function()
{
	this
		.describe("String.fromCodePoint(65).codePointAt(0) is 'A'.codePointAt(0)")
		.exec(String.fromCodePoint(65).codePointAt(0), 'A'.codePointAt(0))
		.done();
});


/*
 String.prototype.repeat
*/

new Suitest('String.prototype.repeat')

.test('String.prototype.repeat', function()
{
	this
		.describe("'A'.repeat(2) is 'AA'")
		.exec('A'.repeat(2), 'AA')
		.done();
});


/*
 String.prototype.startsWith
*/

new Suitest('String.prototype.startsWith')

.test("String.prototype.startsWith: 'test'.startsWith('t')", function()
{
	this
		.exec('test'.startsWith('t'))
		.done();
})

.test("String.prototype.startsWith: 'test me'.startsWith('t')", function()
{
	this
		.exec('test me'.startsWith('t'))
		.done();
})

.test("String.prototype.startsWith: 'test'.startsWith('test')", function()
{
	this
		.exec('test'.startsWith('test'))
		.done();
})

.test("String.prototype.startsWith: !'test'.startsWith('TEST')", function()
{
	this
		.exec(!'test'.startsWith('ЕУЫЕ'))
		.done();
})

.test("String.prototype.startsWith: 'test me'.startsWith('test me')", function()
{
	this
		.exec('test me'.startsWith('test me'))
		.done();
})

.test("String.prototype.startsWith: !'test me'.startsWith(' me')", function()
{
	this
		.exec(!'test me'.startsWith(' me'))
		.done();
})

.test("String.prototype.startsWith: !'test me'.startsWith('me')", function()
{
	this
		.exec(!'test me'.startsWith('me'))
		.done();
})

.test("String.prototype.startsWith: !''.startsWith('a')", function()
{
	this
		.exec(!''.startsWith('a'))
		.done();
})

.test("String.prototype.startsWith: ''.startsWith('')", function()
{
	this
		.exec(''.startsWith(''))
		.done();
})

.test("String.prototype.startsWith: 'test me me'.startsWith('test')", function()
{
	this
		.exec('test me me'.startsWith('test'))
		.done();
})

.test("String.prototype.startsWith: 'test me me'.startsWith('test ')", function()
{
	this
		.exec('test me me'.startsWith('test '))
		.done();
})

.test("String.prototype.startsWith: !'test me me'.startsWith(' test')", function()
{
	this
		.exec(!'test me me'.startsWith(' test'))
		.done();
})

.test("String.prototype.startsWith: !'m'.startsWith('me')", function()
{
	this
		.exec(!'m'.startsWith('me'))
		.done();
})

.test("String.prototype.startsWith: !'me'.startsWith('me ')", function()
{
	this
		.exec(!'me'.startsWith('me '))
		.done();
})

.test("String.prototype.startsWith: 'test me'.startsWith('me', 2)", function()
{
	this
		.exec(!'test me'.startsWith('me', 2))
		.done();
})

.test("String.prototype.startsWith: 'test me'.startsWith('me', '5')", function()
{
	this
		.exec('test me'.startsWith('me', '5'))
		.done();
})

.test("String.prototype.startsWith: !'test'.startsWith('test', 0)", function()
{
	this
		.exec('test'.startsWith('test', 0))
		.done();
})

.test("String.prototype.startsWith: 'test'.startsWith('t', 0)", function()
{
	this
		.exec('test'.startsWith('t', 0))
		.done();
})

.test("String.prototype.startsWith: 'test'.startsWith('e', 1)", function()
{
	this
		.exec('test'.startsWith('e', 1))
		.done();
})

.test("String.prototype.startsWith: 'test'.startsWith('es', 1)", function()
{
	this
		.exec('test'.startsWith('es', 1))
		.done();
})

.test("String.prototype.startsWith: 'test'.startsWith('tes', 0)", function()
{
	this
		.exec('test'.startsWith('tes', 0))
		.done();
})

.test("String.prototype.startsWith: !'test'.startsWith('tes', 1)", function()
{
	this
		.exec(!'test'.startsWith('tes', 1))
		.done();
})

.test("String.prototype.startsWith: '!test'.startsWith('t', 4)", function()
{
	this
		.exec(!'test'.startsWith('t', 4))
		.done();
})

.test("String.prototype.startsWith: 'a'.startsWith('a', 0)", function()
{
this
	.exec('a'.startsWith('a', 0))
	.done();
})

.test("String.prototype.startsWith: !'a'.startsWith('a', 1)", function()
{
this
	.exec(!'a'.startsWith('a', 1))
	.done();
})

.test("String.prototype.startsWith: !'test me'.startsWith('me', 0)", function()
{
this
	.exec(!'test me'.startsWith('me', 0))
	.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3')", function()
{
	this
		.exec(!'123'.startsWith('3'))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3')", function()
{
	this
		.exec(!'123'.startsWith(3))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', 0)", function()
{
	this
		.exec(!'123'.startsWith('3', 0))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', 0)", function()
{
	this
		.exec(!'123'.startsWith(3, 0))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', 1)", function()
{
	this
		.exec(!'123'.startsWith('3', 1))
		.done();
})

	.test("String.prototype.startsWith: !'123'.startsWith('3', 1)", function()
{
	this
		.exec(!'123'.startsWith(3, 1))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('3', 2)", function()
{
	this
		.exec('123'.startsWith('3', 2))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('3', 2)", function()
{
	this
		.exec('123'.startsWith(3, 2))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', 3)", function()
{
	this
		.exec(!'123'.startsWith('3', 3))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', 3)", function()
{
	this
		.exec(!'123'.startsWith(3, 3))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', 4)", function()
{
	this
		.exec(!'123'.startsWith('3', 4))
		.done();
})

	.test("String.prototype.startsWith: !'123'.startsWith('3', 4)", function()
{
	this
		.exec(!'123'.startsWith(3, 4))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('1', '1')", function()
{
	this
		.exec(!'123'.startsWith('1', 1))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('1', '1')", function()
{
	this
		.exec(!'123'.startsWith(1, 1))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('1', null)", function()
{
	this
		.exec('123'.startsWith('1', null))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('1', null)", function()
{
	this
		.exec('123'.startsWith(1, null))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', null)", function()
{
	this
		.exec(!'123'.startsWith('3', null))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', null)", function()
{
	this
		.exec(!'123'.startsWith(3, null))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('1', -1)", function()
{
	this
		.exec('123'.startsWith('1', -1))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('1', -1)", function()
{
	this
		.exec('123'.startsWith(1, -1))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', -1)", function()
{
	this
		.exec(!'123'.startsWith('3', -1))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', -1)", function()
{
	this
		.exec(!'123'.startsWith(3, -1))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', -3)", function()
{
	this
		.exec(!'123'.startsWith('3', -3))
		.done();
})

.test("String.prototype.startsWith: !'123'.startsWith('3', -3)", function()
{
	this
		.exec(!'123'.startsWith(3, -3))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('')", function()
{
	this
		.exec('123'.startsWith(''))
		.done();
})

	.test("String.prototype.startsWith: '123'.startsWith('', 0)", function()
{
	this
		.exec('123'.startsWith('', 0))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('', -1)", function()
{
	this
		.exec('123'.startsWith('', -1))
		.done();
})

.test("String.prototype.startsWith: '123'.startsWith('', 10)", function()
{
	this
		.exec('123'.startsWith('', 10))
		.done();
})

.test("String.prototype.startsWith: ''.startsWith('', 0)", function()
{
	this
		.exec(''.startsWith('', 0))
		.done();
})

.test("String.prototype.startsWith: !''.startsWith(null, 0)", function()
{
	this
		.exec(!''.startsWith(null, 0))
		.done();
})

.test("String.prototype.startsWith: !''.startsWith(undefined, 0)", function()
{
	this
		.exec(!''.startsWith(undefined, 0))
		.done();
})

.test("String.prototype.startsWith: !''.startsWith(0, 0)", function()
{
	this
		.exec(!''.startsWith(0, 0))
		.done();
})

.test("String.prototype.startsWith: !''.startsWith(0, -1)", function()
{
	this
		.exec(!''.startsWith(0, -1))
		.done();
})

.test("String.prototype.startsWith: '-1'.startsWith(-1, -1)", function()
{
	this
		.exec('-1'.startsWith(-1, -1))
		.done();
})

.test("String.prototype.startsWith: '[object Object]'.startsWith({})", function()
{
	this
		.exec('[object Object]'.startsWith({}))
		.done();
})

.test("String.prototype.startsWith: '[object Object]'.startsWith({})", function()
{
	this
		.exec('[object Object]'.startsWith({}))
		.done();
})

// 62 tests


/*
 String.prototype.endsWith
*/

new Suitest('String.prototype.endsWith')

.test("String.prototype.endsWith: 'test'.endsWith('t')", function()
{
	this
		.exec('test'.endsWith('t'))
		.done();
})

.test("String.prototype.endsWith: 'test me'.endsWith('e')", function()
{
	this
		.exec('test me'.endsWith('e'))
		.done();
})

.test("String.prototype.endsWith: 'test me'.endsWith('me')", function()
{
	this
		.exec('test me'.endsWith('me'))
		.done();
})

.test("String.prototype.endsWith: 'test me'.endsWith('test me')", function()
{
	this
		.exec('test me'.endsWith('test me'))
		.done();
})

.test("String.prototype.endsWith: !'test'.endsWith('TEST')", function()
{
	this
		.exec(!'test'.endsWith('TEST'))
		.done();
})

.test("String.prototype.endsWith: 'test me'.endsWith(' me')", function()
{
	this
		.exec('test me'.endsWith(' me'))
		.done();
})

.test("String.prototype.endsWith: !'test me'.endsWith('t')", function()
{
	this
		.exec(!'test me'.endsWith('t'))
		.done();
})

.test("String.prototype.endsWith: !''.endsWith('a')", function()
{
	this
		.exec(!''.endsWith('a'))
		.done();
})

.test("String.prototype.endsWith: ''.endsWith('')", function()
{
	this
		.exec(''.endsWith(''))
		.done();
})

.test("String.prototype.endsWith: 'test me me'.endsWith('me')", function()
{
	this
		.exec('test me me'.endsWith('me'))
		.done();
})

.test("String.prototype.endsWith: 'test me me'.endsWith(' me')", function()
{
	this
		.exec('test me me'.endsWith(' me'))
		.done();
})

.test("String.prototype.endsWith: !'m'.endsWith('me')", function()
{
	this
		.exec(!'m'.endsWith('me'))
		.done();
})

.test("String.prototype.endsWith: !'me'.endsWith('me ')", function()
{
	this
		.exec(!'me'.endsWith('me '))
		.done();
})

.test("String.prototype.endsWith: 'test me'.endsWith('me', 2)", function()
{
	this
		.exec(!'test me'.endsWith('me', 2))
		.done();
})

.test("String.prototype.endsWith: !'test me'.endsWith('me', '2')", function()
{
	this
		.exec(!'test me'.endsWith('me', '2'))
		.done();
})

.test("String.prototype.endsWith: !'test'.endsWith('test', 4)", function()
{
	this
		.exec('test'.endsWith('test', 4))
		.done();
})

.test("String.prototype.endsWith: 'test'.endsWith('t', 1)", function()
{
	this
		.exec('test'.endsWith('t', 1))
		.done();
})

.test("String.prototype.endsWith: 'test'.endsWith('e', 2)", function()
{
	this
		.exec('test'.endsWith('e', 2))
		.done();
})

.test("String.prototype.endsWith: 'test'.endsWith('es', 3)", function()
{
	this
		.exec('test'.endsWith('es', 3))
		.done();
})

.test("String.prototype.endsWith: !'test'.endsWith('tes', 4)", function()
{
	this
		.exec(!'test'.endsWith('tes', 4))
		.done();
})

.test("String.prototype.endsWith: 'test'.endsWith('tes', 4)", function()
{
	this
		.exec('test'.endsWith('tes', 3))
		.done();
})

.test("String.prototype.endsWith: 'test'.endsWith('t', 4)", function()
{
	this
		.exec('test'.endsWith('t', 4))
		.done();
})

.test("String.prototype.endsWith: !'a'.endsWith('a', 0)", function()
{
this
	.exec(!'a'.endsWith('a', 0))
	.done();
})

	.test("String.prototype.endsWith: 'a'.startsWith('a', 1)", function()
{
this
	.exec('a'.endsWith('a', 1))
	.done();
})

.test("String.prototype.endsWith: !'test me'.endsWith('me', 0)", function()
{
this
	.exec(!'test me'.endsWith('me', 0))
	.done();
})

.test("String.prototype.endsWith: '123'.endsWith('3')", function()
{
	this
		.exec('123'.endsWith('3'))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('3')", function()
{
	this
		.exec('123'.endsWith(3))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', 0)", function()
{
	this
		.exec(!'123'.endsWith('3', 0))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', 0)", function()
{
	this
		.exec(!'123'.endsWith(3, 0))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', 1)", function()
{
	this
		.exec(!'123'.endsWith('3', 1))
		.done();
})

	.test("String.prototype.endsWith: !'123'.endsWith('3', 1)", function()
{
	this
		.exec(!'123'.endsWith(3, 1))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', 2)", function()
{
	this
		.exec(!'123'.endsWith('3', 2))
		.done();
})

	.test("String.prototype.endsWith: !'123'.endsWith('3', 2)", function()
{
	this
		.exec(!'123'.endsWith(3, 2))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('3', 3)", function()
{
	this
		.exec('123'.endsWith('3', 3))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('3', 3)", function()
{
	this
		.exec('123'.endsWith(3, 3))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('3', 4)", function()
{
	this
		.exec('123'.endsWith('3', 4))
		.done();
})

	.test("String.prototype.endsWith: '123'.endsWith('3', 4)", function()
{
	this
		.exec('123'.endsWith(3, 4))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('1', '1')", function()
{
	this
		.exec('123'.endsWith('1', 1))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('1', '1')", function()
{
	this
		.exec('123'.endsWith(1, 1))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('1', null)", function()
{
	this
		.exec(!'123'.endsWith('1', null))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('1', null)", function()
{
	this
		.exec(!'123'.endsWith(1, null))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', null)", function()
{
	this
		.exec(!'123'.endsWith('3', null))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', null)", function()
{
	this
		.exec(!'123'.endsWith(3, null))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('1', -1)", function()
{
	this
		.exec(!'123'.endsWith('1', -1))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('1', -1)", function()
{
	this
		.exec(!'123'.endsWith(1, -1))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', -1)", function()
{
	this
		.exec(!'123'.endsWith('3', -1))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', -1)", function()
{
	this
		.exec(!'123'.endsWith(3, -1))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', -3)", function()
{
	this
		.exec(!'123'.endsWith('3', -3))
		.done();
})

.test("String.prototype.endsWith: !'123'.endsWith('3', -3)", function()
{
	this
		.exec(!'123'.endsWith(3, -3))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('')", function()
{
	this
		.exec('123'.endsWith(''))
		.done();
})

	.test("String.prototype.endsWith: '123'.endsWith('', 0)", function()
{
	this
		.exec('123'.endsWith('', 0))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('', -1)", function()
{
	this
		.exec('123'.endsWith('', -1))
		.done();
})

.test("String.prototype.endsWith: '123'.endsWith('', 10)", function()
{
	this
		.exec('123'.endsWith('', 10))
		.done();
})

.test("String.prototype.endsWith: ''.endsWith('', 0)", function()
{
	this
		.exec(''.endsWith('', 0))
		.done();
})

.test("String.prototype.endsWith: !''.endsWith(null, 0)", function()
{
	this
		.exec(!''.endsWith(null, 0))
		.done();
})

.test("String.prototype.endsWith: !''.endsWith(undefined, 0)", function()
{
	this
		.exec(!''.endsWith(undefined, 0))
		.done();
})

.test("String.prototype.endsWith: !''.endsWith(0, 0)", function()
{
	this
		.exec(!''.endsWith(0, 0))
		.done();
})

.test("String.prototype.endsWith: !''.endsWith(0, -1)", function()
{
	this
		.exec(!''.endsWith(0, -1))
		.done();
})

.test("String.prototype.endsWith: '-1'.endsWith(-1)", function()
{
	this
		.exec('-1'.endsWith(-1))
		.done();
})

.test("String.prototype.endsWith: '[object Object]'.endsWith({})", function()
{
	this
		.exec('[object Object]'.endsWith({}))
		.done();
})

.test("String.prototype.endsWith: '[object Array]'.endsWith([])", function()
{
	this
		.exec('[object Object]'.endsWith([]))
		.done();
})

// 60 tests


/*
 String.prototype.contains
*/

new Suitest('String.prototype.contains')

.test('String.prototype.contains', function()
{
	this
		.describe("'Hello'.contains('He') is true")
		.exec('Hello'.contains('He'))
		.done();
})

.test('String.prototype.contains', function()
{
	this
		.describe("'Hello'.contains('HE') is false")
		.exec(!'Hello'.contains('HE'))
		.done();
});
