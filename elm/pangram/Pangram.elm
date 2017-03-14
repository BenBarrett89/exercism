module Pangram exposing (..)

import List exposing (length)
import Regex exposing (regex, replace)
import Set exposing (fromList, toList)
import String exposing (split, toLower)

isPangram: String -> Bool
isPangram candidate =
  (uniqueCharacters candidate) == 26

uniqueCharacters: String -> Int
uniqueCharacters sentence =
  sentence
    |> toLower
    |> removeNonalphabetical
    |> splitToCharacters
    |> removeDuplicates
    |> length

splitToCharacters: String -> List String
splitToCharacters word =
  split "" word

removeDuplicates: List String -> List String
removeDuplicates list =
  (toList (fromList list))

removeNonalphabetical = replace Regex.All (regex "[^a-z+]") (\_ -> "")
