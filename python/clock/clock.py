MINUTES_IN_A_DAY = 1440

class Clock(object):
    minutes = 0

    def __init__(self, hours, minutes):
        self.add(hours * 60 + minutes)

    def __str__(self):
        return "%02d:%02d" % (self.strHour(), self.strMinute())

    def __eq__(self, other):
        return self.getMinutes() == other.getMinutes()

    def add(self, minutes):
        self.minutes += minutes
        if (self.minutes < 0): self.minutes = (MINUTES_IN_A_DAY + self.minutes)
        self.minutes = self.minutes % MINUTES_IN_A_DAY
        return self

    def getMinutes(self):
        return self.minutes

    def strHour(self):
        return self.minutes // 60

    def strMinute(self):
        return self.minutes - (self.strHour() * 60)
