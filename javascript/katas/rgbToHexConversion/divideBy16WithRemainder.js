function divideBy16WithRemainder(number) {
  const divisionResult = number / 16;
  const wholeNumber = Math.floor(divisionResult);
  const remainder = number % 16;
  return [wholeNumber, remainder];
}

module.exports = divideBy16WithRemainder
