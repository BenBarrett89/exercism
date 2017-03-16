module Raindrops exposing (..)

import Dict
import Maybe exposing (withDefault)
import String exposing (isEmpty)

raindropSounds = Dict.fromList [ (3, "Pling"), (5, "Plang"), (7, "Plong") ]

raindrops: Int -> String
raindrops number =
  let
    sound: String
    sound =
      String.concat (List.map getRaindropSound (getFactors number))
  in if isEmpty sound then toString number else sound

getRaindropSound: Int -> String
getRaindropSound number =
  withDefault "" (Dict.get number raindropSounds)

getFactors: Int -> List Int
getFactors number =
  List.filter (\n -> isFactor n number) (Dict.keys raindropSounds)

isFactor: Int -> Int -> Bool
isFactor candidate number =
  rem number candidate == 0
