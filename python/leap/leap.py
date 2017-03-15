def is_leap_year(year):
    return divisible_by(4, year) and not (divisible_by(100, year) and not divisible_by(400, year))

def divisible_by(number, year):
    return year % number == 0
