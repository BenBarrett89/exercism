from datetime import timedelta

gigasecond = timedelta(seconds=1000000000)

def add_gigasecond(date):
    return date + gigasecond
