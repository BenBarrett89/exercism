def distance(strandA, strandB):
    if len(strandA) != len(strandB):
        raise ValueError('DNA strand lengths are not equal')
    distance = 0
    for i in range(0, len(strandA)):
        if (strandA[i] != strandB[i]): distance += 1
    return distance
