import { Keith } from '../src/js/keith.js';

describe('Keith', () => {

  test('should return Keith Richards age in Earth years in the year 2073', () => {
    const keith = new Keith(130);
    expect(keith.earth).toEqual(130);
  });
  test('should return Keith Richards age in the year 2073, in dog years', () => {
    const keith = new Keith(130);
    keith.dogYears()
    expect(keith.dogyears).toEqual(910);
  });
  test('should return Keith Richards age in the year 2073, in dog years, in Jupiter years', () => {
    const keith = new Keith(130);
    keith.dogYears();
    keith.jupiter();
    expect(keith.jupiter).toEqual(10792.6);
  });
});