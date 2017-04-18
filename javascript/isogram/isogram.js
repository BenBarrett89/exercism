module.exports = function (candidate) {
  const word = candidate.toLowerCase().replace(/[\s-]/g, '').split('')
  const isogram = word.length === new Set(word).size

  this.isIsogram = () => {
    return isogram
  }
}
