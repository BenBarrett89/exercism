import re

DNA = 'GCTA'
RNA = 'CGAU'
INVALID_DNA_NUCLEOTIDE = re.compile('[^'+DNA+']+')
DNA_TO_RNA = str.maketrans(DNA, RNA)

def to_rna(dnaStrand):
    return dnaStrand.translate(DNA_TO_RNA) if valid_dna(dnaStrand) else ''

def valid_dna(dnaStrand):
    return not re.search(INVALID_DNA_NUCLEOTIDE, dnaStrand)
