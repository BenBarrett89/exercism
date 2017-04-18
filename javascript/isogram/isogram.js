module.exports = function (word) {
  var letters = {}

  const isogram = word.toLowerCase().match(/[^\s-]/g).find(letter => {
    var duplicate = false
    if (letters[letter]) duplicate = true
    else letters[letter] = true
    return duplicate
  }) === undefined

  this.isIsogram = () => {
    return isogram
  }
}
