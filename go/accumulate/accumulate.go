// Package accumulate defines an accumulation function
package accumulate

const testVersion = 1

// Accumulate function takes an array of strings and returns an array with the given operation applied to all array elements
func Accumulate(array []string, operation func(string) string) []string {
	var accumulated []string
	for i := 0; i < len(array); i++ {
		accumulated = append(accumulated, operation(array[i]))
	}
	return accumulated
}
