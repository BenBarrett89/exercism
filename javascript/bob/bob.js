const silence = talk => talk.trim().length === 0
const yelling = talk => talk.toUpperCase() === talk && talk.toLowerCase() !== talk
const question = talk => talk.endsWith('?')

module.exports = function () {
  this.hey = talk => {
    let response = 'Whatever.'
    if (silence(talk)) response = 'Fine. Be that way!'
    else if (yelling(talk)) response = 'Whoa, chill out!'
    else if (question(talk)) response = 'Sure.'
    return response
  }
}
