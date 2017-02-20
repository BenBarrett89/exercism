//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
  this.year = year
}

const isEvenlyDivisibleByNumber = (year, number) => {
  return year % number === 0
}

const isEvenlyDivisibleByFour = (year) => {
  return isEvenlyDivisibleByNumber(year, 4)
}

const isEvenlyDivisibleByOneHundredButNotEvenlyDivisibleByFourHundred = (year) => {
  return isEvenlyDivisibleByNumber(year, 100) && !isEvenlyDivisibleByNumber(year, 400)
}

Year.prototype.isLeap = function () {
  return isEvenlyDivisibleByFour(this.year) && !isEvenlyDivisibleByOneHundredButNotEvenlyDivisibleByFourHundred(this.year)
}

module.exports = Year
