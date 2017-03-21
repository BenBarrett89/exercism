// Package clock defines a clock type
package clock

import "fmt"

const testVersion = 4
const minutesInDay = 1440

// Clock type
type Clock struct {
	Minutes int
}

// New function creates a new clock
func New(hour, minute int) Clock {
	minutes := ((hour * 60) + minute) % minutesInDay
	if minutes < 0 {
		minutes += minutesInDay
	}
	return Clock{minutes}
}

// String function returns the string representation of the Clock
func (clock Clock) String() string {
	return fmt.Sprintf("%02d:%02d", clock.hour(), clock.minutes())
}

// Add function adds the given number of minutes to the clock's minutes
func (clock Clock) Add(minutes int) Clock {
	return New(clock.hour(), clock.minutes()+minutes)
}

// hour function returns the clock hour
func (clock Clock) hour() int {
	return clock.Minutes / 60
}

// minutes function returns the clock minutes
func (clock Clock) minutes() int {
	return clock.Minutes % 60
}
