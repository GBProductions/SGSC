import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
// import { Age } from 'js/age.js';
// import { Keith } from 'js/keith.js';

$(document).ready(function() {

  let earthAge = 130;
  let dogYears = earthAge * 7;
  let jupiterAge = dogYears * 11.86;
  let sentence = `Keith Richards is ${dogYears} in dog years on Earth. However, in dog years on Jupiter, he is ${jupiterAge}.`;

  console.log(sentence);
});