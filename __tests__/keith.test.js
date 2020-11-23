import { Keith } from './../src/keith.js';

describe('Keith', () => {

  test('should return Keith Richards age in Earth years in the year 2073', () => {
    const keith = new Keith(130);
    expect(keith.earth).toEqual();
  });
  // test('should return Keith Richards age in the year 2073, in dog years', () => {
  //   const age = new Age(130);
  //   expect(age.dogYears).toEqual(910);
  // });
  // test('should return Keith Richards age in the year 2073, in dog years, in Jupiter years', () => {
  //   const age = new Age(130);
  //   expect(age.Jupiter).toEqual(10792.6);
  // });
});