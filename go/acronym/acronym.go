// Package acronym defines a function to create acronyms
package acronym

import "regexp"
import "strings"

var anythingAfterSemicolon = regexp.MustCompile(":(.*)")
var spaceCapitalLetterOrHyphen = regexp.MustCompile("[A-Z]| (.)|-(.)")
var onlyCharacters = regexp.MustCompile("[^\\w]")

const testVersion = 2

// Abbreviate function returns an abbreivation/acronym for a given sequence of words/characters
func Abbreviate(input string) string {
	stripAfterSemicolon := anythingAfterSemicolon.ReplaceAllString(input, "")
	split := spaceCapitalLetterOrHyphen.FindAllString(stripAfterSemicolon, -1)
	join := strings.Join(split, "")
	stripNonChars := onlyCharacters.ReplaceAllString(join, "")
	return strings.ToUpper(stripNonChars)
}
