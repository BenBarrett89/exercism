const ERROR_MESSAGE_STRANDS_NOT_EQUAL_LENGTH = 'DNA strands must be of equal length.'

var Hamming = function () {
}

Hamming.prototype.compute = function (strandA, strandB) {
  const strandAArray = strandA.split('')
  const strandBArray = strandB.split('')
  if (strandAArray.length !== strandBArray.length) {
    throw new Error(ERROR_MESSAGE_STRANDS_NOT_EQUAL_LENGTH)
  }
  const sequenceLength = strandAArray.length
  let hammingDifference = 0
  for (let index = 0; index < sequenceLength; index++) {
    if (strandAArray[index] !== strandBArray[index]) hammingDifference++
  }
  return hammingDifference
}

module.exports = Hamming
