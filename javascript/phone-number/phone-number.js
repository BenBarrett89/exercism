const phoneNumberValid = number => {
  return number.length === 10
}

const cleanPhoneNumber = rawNumber => {
  'use strict'
  let number = rawNumber.replace(/[^\d]/g, '')
  if (number.length === 11 && number.startsWith(1)) {
    number = number.slice(1, 11)
  }
  return number
}

const processPhoneNumber = rawNumber => {
  'use strict'
  let number = cleanPhoneNumber(rawNumber)
  if (!phoneNumberValid(number)) { number = '0000000000' }
  return number
}

module.exports = function (phoneNumber) {
  const number = processPhoneNumber(phoneNumber)
  this.number = () => { return number }
}
