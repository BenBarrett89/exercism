const capitalize = sentence => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

const numberToBottles = number => {
  const bottle = number === 0 ? 'no more' : number
  const plural = number === 1 ? 'bottle' : 'bottles'
  return `${bottle} ${plural}`
}

module.exports = function () {
  this.sing = (start, end = 0) => {
    const thisVerse = this.verse(start)
    return start === end ? thisVerse : `${thisVerse}\n${this.sing(start - 1, end)}`
  }

  this.verse = number => {
    const thisBottle = numberToBottles(number)
    const nextBottle = numberToBottles(number === 0 ? 99 : number - 1)
    const quantifier = number === 1 ? 'it' : 'one'
    const action = number === 0 ? `Go to the store and buy some more` : `Take ${quantifier} down and pass it around`
    return capitalize(`${thisBottle} of beer on the wall, ${thisBottle} of beer.\n${action}, ${nextBottle} of beer on the wall.\n`)
  }
}
