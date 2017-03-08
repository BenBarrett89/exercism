const LETTER_REGEX = /[a-z]/
const WHITESPACE_REGEX = /\s+/g
const NUMBER_OF_LETTERS_IN_ALPHABET = 26

const contains = (array, check) => {
  return array.some(value => value === check)
}

const isLetter = (letterRegex, letter) => {
  return letterRegex.test(letter)
}

const getLettersUsed = sentence => {
  return sentence.toLowerCase().replace(WHITESPACE_REGEX, '').split('').reduce((lettersUsed, letter) => {
    if (isLetter(LETTER_REGEX, letter) && !contains(lettersUsed, letter)) {
      lettersUsed.push(letter)
    }
    return lettersUsed
  }, [])
}

const isSentencePangram = sentence => {
  return getLettersUsed(sentence).length === NUMBER_OF_LETTERS_IN_ALPHABET
}

var Pangram = function (sentence) {
  this.pangram = isSentencePangram(sentence)
}

Pangram.prototype.isPangram = function () {
  return this.pangram
}

module.exports = Pangram
