module Leap exposing (..)

isLeapYear: Int -> Bool
isLeapYear year =
  isEvenlyDivisible year 4 &&
  not (isEvenlyDivisible year 100 && not (isEvenlyDivisible year 400))

isEvenlyDivisible: Int -> Int -> Bool
isEvenlyDivisible a b =
  rem a b == 0
