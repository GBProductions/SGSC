import { Age } from './../src/age.js';

describe('Age', () => {

  test('should return users age in Earth years', () => {
    const age = new Age(100);
    expect(age.earth).toEqual(100);
  });

  test('should return life expectancy in Earth years', () => {
    const age = new Age(100,200);
    expect(age.earthLifeExpectancy).toEqual(200);
  })



});