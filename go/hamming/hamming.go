// Package hamming implements a function to calculate the Hamming distance
package hamming

import "fmt"

const testVersion = 5

type ErrStrandLengthsNotEqual struct {
	strandALength int
	strandBLength int
}

func (e ErrStrandLengthsNotEqual) Error() string {
	return fmt.Sprintf("strand A length is %v, but strand B length is %v - strand lengths must be equal",
		e.strandALength, e.strandBLength)
}

// Distance function returns the Hamming distance between two given strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return -1, ErrStrandLengthsNotEqual{len(a), len(b)}
	}
	count := 0
	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			count++
		}
	}
	return count, nil
}
