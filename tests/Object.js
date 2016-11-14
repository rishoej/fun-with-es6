require('../ES6.js');
require('./suitest.js');

/**
 * ------------------------------------------------------------
 * Object
 * ------------------------------------------------------------
**/

void function(__is__, object)
{
	/*
	 Object.is
	*/

	new Suitest('Object.is')

	.test('Object.is: negative zero', function()
	{
		this
			.describe('0 is not -0')
			.exec(!Object.is(0, -0))
			.done();
	})

	.test('Object.is: numbers and strings', function()
	{
		this
			.describe('"0" is not 0')
			.exec(!Object.is('0', 0))
			.done();
	})

	.test('Object.is: equivalent numbers', function()
	{
		this
			.describe('0 is 0')
			.exec(Object.is(0, 0))
			.done();
	})

	.test('Object.is: NaN', function()
	{
		this
			.describe('NaN is NaN')
			.exec(Object.is(NaN, NaN))
			.done();
	});

	// TODO: Object.getOwnPropertyKeys, Object.mixin, Object.assign

}(Object.prototype.toString, {});
