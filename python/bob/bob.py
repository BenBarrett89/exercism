DEFAULT_RESPONSE = "Whatever."
QUESTION_RESPONSE = "Sure."
YELLING_RESPONSE = "Whoa, chill out!"
SILENCE_RESPONSE = "Fine. Be that way!"

def hey(utterance):
    talk = utterance.strip()
    response = DEFAULT_RESPONSE
    if addressed_with_silence(talk):
        response = SILENCE_RESPONSE
    elif yelled_at(talk):
        response = YELLING_RESPONSE
    elif asked_question(talk):
        response = QUESTION_RESPONSE
    return response

def asked_question(talk):
    return talk[-1:] == "?"

def yelled_at(talk):
    return talk.isupper()

def addressed_with_silence(talk):
    return len(talk) == 0
