import { exportAllDeclaration } from '@babel/types';
import TestRunner from 'jest-runner';
import { describe } from 'yargs';
import { Age } from './../src/age.js';

describe('Age', () => {
  test('should return users age in Earth years', () => {
    const age = new Age(100);
    expect(age.earth).toEqual(100);
  })






});