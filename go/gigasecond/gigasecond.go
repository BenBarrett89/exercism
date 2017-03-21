// Package gigasecond implements a function to add a gigasecnd to a time
package gigasecond

import "time"

// Constant declaration.
const testVersion = 4
const gigasecond = time.Duration(1000000000) * time.Second

// AddGigasecond function adds a gigasecond to the given time
func AddGigasecond(time time.Time) time.Time {
	return time.Add(gigasecond)
}
