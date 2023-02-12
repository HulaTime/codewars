const divideBy16WithRemainder = require("./divideBy16WithRemainder");
const hexFrom1To16 = require("./hexFrom1To16");

function decimalToHex(number) {
  const hexParts = [];
  const [quotient, remainder] = divideBy16WithRemainder(number);
  if (quotient === 0) {
    return hexFrom1To16(remainder);
  }
  hexParts.unshift(hexFrom1To16(remainder));
  const remainingHexPart = decimalToHex(quotient)
  hexParts.unshift(remainingHexPart);
  return hexParts.join('');
}

module.exports = decimalToHex;
