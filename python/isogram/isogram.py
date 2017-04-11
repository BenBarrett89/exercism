import re

def is_isogram(word):
    wordCharacters = re.sub(r'\W+', '', word.lower())
    return len(wordCharacters) == len(set(wordCharacters))
