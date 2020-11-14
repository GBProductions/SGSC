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

  test('should take user age in Earth years and return in Mercury years', () => {
    const age = new Age(100);
    age.mercuryAge()
    expect(age.mercury).toEqual(24)
  })

  test('should take user age in Earth years and return in Venus years', () => {
    const age = new Age(100);
    age.venusAge()
    expect(age.venus).toEqual(62)
  })

  test('should take user age in Earth years and return in Mars years', () => {
    const age = new Age(100);
    age.marsAge()
    expect(age.mars).toEqual(188)
  })

  // test('should take user age in Earth years and return in Jupiter years', () => {
  //   const age = new Age(100);
  //   age.jupiterAge()
  //   expect(age.jupiter).toEqual()
  // })

  // test('should return remaining time expected to live on Mercury, subtracting life lived from life expectancy', () => {
    
  // })

  // test('should return remaining time expected to live on Venus, subtracting life lived from life expectancy', () => {
    
  // })

  // test('should return remaining time expected to live on Mars, subtracting life lived from life expectancy', () => {
    
  // })

  // test('should return remaining time expected to live on Jupiter, subtracting life lived from life expectancy', () => {
    
  // })

  // test('should return number of years lived past Mercury life expectancy', () => {
    
  // })

  // test('should return number of years lived past Venus life expectancy', () => {
    
  // })

  // test('should return number of years lived past Mars life expectancy', () => {
    
  // })

  // test('should return number of years lived past Jupiter life expectancy', () => {
    
  // })

});