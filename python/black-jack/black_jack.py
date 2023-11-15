"""Functions to help play and score a game of blackjack.

How to play blackjack:    https://bicyclecards.com/how-to-play/blackjack/
"Standard" playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
"""

def value_of_card(card):
    """Determine the scoring value of a card.

    :param card: str - given card.
    :return: int - value of a given card.  See below for values.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """
    if card == 'A':
        return 1
    if card in 'JKQ':
        return 10
    return int(card)


def higher_card(card_one, card_two):
    """Determine which card has a higher value in the hand.

    :param card_one, card_two: str - cards dealt in hand.  See below for values.
    :return: str or tuple - resulting Tuple contains both cards if they are of equal value.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """
    value_of_card_one = value_of_card(card_one)
    value_of_card_two = value_of_card(card_two)
    if value_of_card_one == value_of_card_two:
        return (card_one, card_two)
    if value_of_card_one > value_of_card_two:
        return card_one
    return card_two

def value_of_ace(card_one, card_two):
    """Calculate the most advantageous value for the ace card.

    :param card_one, card_two: str - card dealt. See below for values.
    :return: int - either 1 or 11 value of the upcoming ace card.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    value_of_card_one = 11 if card_one == 'A' else value_of_card(card_one)
    value_of_card_two = 11 if card_two == 'A' else value_of_card(card_two)
    card_sum = value_of_card_one + value_of_card_two
    one_sum_distance = 21 - card_sum + 1
    eleven_sum = card_sum + 11
    eleven_sum_distance = 21 - eleven_sum
    if (eleven_sum > 21 or one_sum_distance < eleven_sum_distance):
        return 1
    return 11


def is_blackjack(card_one, card_two):
    """Determine if the hand is a 'natural' or 'blackjack'.

    :param card_one, card_two: str - card dealt. See below for values.
    :return: bool - is the hand is a blackjack (two cards worth 21).

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    card_one_is_ace = card_one == 'A'
    card_two_is_ace = card_two == 'A'
    card_one_is_ten = value_of_card(card_one) == 10
    card_two_is_ten = value_of_card(card_two) == 10 
    return (card_one_is_ace and card_two_is_ten) or (card_one_is_ten and card_two_is_ace)


def can_split_pairs(card_one, card_two):
    """Determine if a player can split their hand into two hands.

    :param card_one, card_two: str - cards dealt.
    :return: bool - can the hand be split into two pairs? (i.e. cards are of the same value).
    """
    return value_of_card(card_one) == value_of_card(card_two)


def can_double_down(card_one, card_two):
    """Determine if a blackjack player can place a double down bet.

    :param card_one, card_two: str - first and second cards in hand.
    :return: bool - can the hand can be doubled down? (i.e. totals 9, 10 or 11 points).
    """
    cards_sum = value_of_card(card_one) + value_of_card(card_two)
    return 9 <= cards_sum <= 11