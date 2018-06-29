'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const adder = require('../adder');
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should display fizz, buzz, or fizz-buzz or number', function() {
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: 22, expected: 22},
      {num: 30, expected: 'fizz-buzz'},
      {num: 6, expected: 'fizz'},
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should display fizz, buzz, or fizz-buzz or number', function() {
    const badInputs = [
      {num: 'a', expected: 5},
      {num: true, expected: 'fizz-buzz'},
      {num: false, expected: 'fizz-buzz'},
      {num: 'bea', expected: 'fizz'},
    ];

    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input.num);
      }).to.throw(Error);
    });
  });
});

// unit tests for our `adder` function
describe('adder', function() {

  // test the normal case
  it('should add two numbers', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 2, b: 3, expected: 5},
      {a: 200, b: 2000, expected: 2200},
      {a: 2, b: -5, expected: -3}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a, input.b);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});