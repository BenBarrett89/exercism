// Package raindrops converts a number to 'raindrop-speak'
package raindrops

import (
	"bytes"
	"fmt"
)

const testVersion = 2

var raindropSpeak = []struct {
	factor int
	sound  string
}{
	{3, "Pling"},
	{5, "Plang"},
	{7, "Plong"},
}

// Convert function converts the given number to 'raindrop-speak'
func Convert(number int) string {
	var raindropSound bytes.Buffer
	raindropSound = convertToFactorSounds(number)
	if raindropSound.Len() == 0 {
		raindropSound.WriteString(fmt.Sprintf("%d", number))
	}
	return raindropSound.String()
}

// convertToFactorSounds function appends factors sounds for relevant factors
func convertToFactorSounds(number int) bytes.Buffer {
	var factorSounds bytes.Buffer
	for _, raindrop := range raindropSpeak {
		if isFactorOf(raindrop.factor, number) {
			factorSounds.WriteString(raindrop.sound)
		}
	}
	return factorSounds
}

// isFactorOf function returns true if the given number has the given factor as a factor
func isFactorOf(factor int, number int) bool {
	return number%factor == 0
}
