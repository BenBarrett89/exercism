// Package leap implements a function to calculate
// whether a given year is a leap year
package leap

const testVersion = 3

// IsLeapYear returns whether a given year is a leap year or not
func IsLeapYear(year int) bool {
	return isEvenlyDivisible(year, 4) && !(isEvenlyDivisible(year, 100) && !isEvenlyDivisible(year, 400))
}

// isEvenlyDivisible returns whether a given number has no remainder when divided by a given divisor
func isEvenlyDivisible(number int, divisor int) bool {
	return number%divisor == 0
}
