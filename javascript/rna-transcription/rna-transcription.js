const RNA_MAP = {
  A: `U`,
  C: `G`,
  G: `C`,
  T: `A`
}

const VALID_DNA_NUCLEOTIDES = Object.keys(RNA_MAP)

const isDnaNucelotideValid = (dnaNucleotide, validDnaNucelotides) => {
  return validDnaNucelotides.some(validNucleotide => validNucleotide === dnaNucleotide)
}

var DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (dna) {
  return dna.split('').reduce((rnaStrand, dnaNucleotide) => {
    const valid = isDnaNucelotideValid(dnaNucleotide, VALID_DNA_NUCLEOTIDES)
    if (!valid) throw new Error(`Invalid input`)
    const rnaNucleotide = RNA_MAP[dnaNucleotide]
    rnaStrand.push(rnaNucleotide)
    return rnaStrand
  }, []).join('')
}

module.exports = DnaTranscriber
