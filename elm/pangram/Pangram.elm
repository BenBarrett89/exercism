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
    |> String.toList
    |> removeDuplicates
    |> length

removeDuplicates: List comparable -> List comparable
removeDuplicates list =
  (Set.toList (Set.fromList list))

removeNonalphabetical = replace Regex.All (regex "[^a-z+]") (\_ -> "")
