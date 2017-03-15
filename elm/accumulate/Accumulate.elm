module Accumulate exposing (..)

import List exposing (head, tail)

accumulate: (a -> b) -> List a -> List b
accumulate operation collection =
  case (head collection) of
    Nothing -> []
    Just item -> case (tail collection) of
      Nothing -> [(operation item)]
      Just listTail -> [(operation item)] ++ (accumulate operation listTail)
