module Bob exposing (..)

import String
import Char
import Regex

hey: String -> String
hey talk =
  if silence talk then "Fine. Be that way!"
  else if yelling talk then "Whoa, chill out!"
  else if question talk then "Sure."
  else "Whatever."

question: String -> Bool
question talk =
  String.endsWith "?" talk

yelling: String -> Bool
yelling talk =
  String.all uppercase talk && Regex.contains (Regex.regex "[a-zA-Z]+") talk

uppercase: Char -> Bool
uppercase char =
  Char.isUpper char

silence: String -> Bool
silence talk =
  (String.isEmpty (String.trim talk))
