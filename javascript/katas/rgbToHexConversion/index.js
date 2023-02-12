// https://www.codewars.com/kata/513e08acc600c94f01000001/javascript

const decimalToHex = require("./decimalToHex");

function padZero(stringNumber) {
  if (stringNumber.length === 1) {
    return `0${stringNumber}`
  }
  return stringNumber;
}

function clampRgbValues(input) {
  if (input < 0) {
    return 0;
  }
  if (input > 255) {
    return 255
  }
  return input
}

function rgbToHexConverter(r, g, b) {
  return `${padZero(decimalToHex(clampRgbValues(r)))}` +
    `${padZero(decimalToHex(clampRgbValues(g)))}` +
    `${padZero(decimalToHex(clampRgbValues(b)))}`
}

module.exports = rgbToHexConverter;
