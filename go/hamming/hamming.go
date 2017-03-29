// Package hamming implements a function to calculate the Hamming distance
package hamming

import "errors"

const testVersion = 5

// Distance function returns the Hamming distance between two given strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return -1, errors.New("strand lengths must be equal")
	}
	count := 0
	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			count++
		}
	}
	return count, nil
}
