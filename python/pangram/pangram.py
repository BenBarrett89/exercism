import re
def is_pangram(sentence):
    return len(set(re.sub(r'[^a-z]+', r'', sentence.lower()))) == 26
