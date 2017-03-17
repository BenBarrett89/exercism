def distance(strandA, strandB):
    if len(strandA) != len(strandB):
        raise ValueError('DNA strand lengths are not equal')
    distance = 0
    for a, b in zip(strandA, strandB):
        if (a != b): distance += 1
    return distance
