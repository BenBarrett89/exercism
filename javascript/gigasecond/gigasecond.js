const MILLISECONDS_IN_GIGASECOND = 1e12

const addMilliseconds = (date, milliseconds) => {
  return new Date(date.getTime() + milliseconds)
}

module.exports = function (start) {
  this.date = () => {
    return addMilliseconds(start, MILLISECONDS_IN_GIGASECOND)
  }
}
