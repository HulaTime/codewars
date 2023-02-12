function hexFrom1To16(number) {
  if (number > 16 || number < 0) {
    throw new RangeError('Input number must be between 1 and 16')
  }
  if (0 <= number && number <= 9) {
    return String(number);
  }
  const hexValues = ['A', 'B', 'C', 'D', 'E', 'F', '10'];
  return hexValues[number % 10]
}

module.exports = hexFrom1To16;
