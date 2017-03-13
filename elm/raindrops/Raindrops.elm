module Raindrops exposing (..)

import Dict exposing (fromList, get, member)
import List exposing (filter, map, range)
import Maybe exposing (withDefault)
import String exposing (isEmpty, join)

raindropSounds = fromList [ (3, "Pling"), (5, "Plang"), (7, "Plong") ]

raindrops: Int -> String
raindrops number =
  let
    sound: String
    sound =
      join "" (map getRaindropSound (getFactors number))
  in if isEmpty sound then toString number else sound

getRaindropSound: Int -> String
getRaindropSound number =
  withDefault "" (get number raindropSounds)

getFactors: Int -> List Int
getFactors number =
  filter (\n -> isFactor n number) (range 1 number)

isFactor: Int -> Int -> Bool
isFactor candidate number =
  rem number candidate == 0
