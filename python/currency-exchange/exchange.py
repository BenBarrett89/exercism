"""
Currency Exchange Learning Exercise
"""

def exchange_money(budget, exchange_rate):
    return budget / exchange_rate


def get_change(budget, exchanging_value):
    return budget - exchanging_value


def get_value_of_bills(denomination, number_of_bills):
    return denomination * number_of_bills


def get_number_of_bills(amount, denomination):
    return int(amount / denomination)


def get_leftover_of_bills(amount, denomination):
    return amount - (get_number_of_bills(amount, denomination) * denomination)


def exchangeable_value(budget, exchange_rate, spread, denomination):
    actual_rate = exchange_rate + (exchange_rate * (spread / 100))
    value = exchange_money(budget, actual_rate)
    return int(get_value_of_bills(denomination, get_number_of_bills(value, denomination)))
