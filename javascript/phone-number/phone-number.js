const cleanPhoneNumber = rawNumber => {
  let number = rawNumber.replace(/[^\d]/g, '')
  if (number.length === 11 && number.startsWith(1)) {
    number = number.slice(1, 11)
  }
  return number
}

const extractAreaCode = number => {
  return number.slice(0, 3)
}

const formatNumber = number => {
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`
}

const phoneNumberValid = number => {
  return number.length === 10
}

const processPhoneNumber = rawNumber => {
  let number = cleanPhoneNumber(rawNumber)
  if (!phoneNumberValid(number)) { number = '0000000000' }
  return number
}

module.exports = function (phoneNumber) {
  const number = processPhoneNumber(phoneNumber)
  const areaCode = extractAreaCode(number)
  const formattedNumber = formatNumber(number)

  this.areaCode = () => { return areaCode }
  this.number = () => { return number }
  this.toString = () => { return formattedNumber }
}
