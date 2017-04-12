import re

def word_count(sentence):
    count = {}
    words = re.split(r'[_\W]', sentence.lower())
    for word in words:
        if word.isalnum():
            if word not in count.keys():
                count[word] = 1
            else:
                count[word] = count[word] + 1
    return count
