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

silence: String -> Bool
silence talk =
  (String.isEmpty (String.trim talk))

yelling: String -> Bool
yelling talk =
  (String.toUpper talk == talk) && not (String.toLower talk == talk)

question: String -> Bool
question talk =
  String.endsWith "?" talk
