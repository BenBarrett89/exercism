module Leap exposing (..)

isLeapYear: Int -> Bool
isLeapYear year =
  isEvenlyDivisibleByFour year &&
  not (isAnException year)

isAnException: Int -> Bool
isAnException year =
  isEvenlyDivisibleByOneHundred year &&
  not (isEvenlyDivisibleByFourHundred year)

isEvenlyDivisible: Int -> Int -> Bool
isEvenlyDivisible a b =
  rem a b == 0

isEvenlyDivisibleByFour: Int -> Bool
isEvenlyDivisibleByFour year =
  isEvenlyDivisible year 4

isEvenlyDivisibleByOneHundred: Int -> Bool
isEvenlyDivisibleByOneHundred year =
  isEvenlyDivisible year 100

isEvenlyDivisibleByFourHundred: Int -> Bool
isEvenlyDivisibleByFourHundred year =
  isEvenlyDivisible year 400
