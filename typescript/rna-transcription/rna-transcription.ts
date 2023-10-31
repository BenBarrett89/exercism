enum dnaToRnaMap {
  G = "C",
  C = "G",
  T = "A",
  A = "U",
}

type dna = keyof typeof dnaToRnaMap;

export function toRna(strand: string): string {
  return strand
    .split("")
    .map((nucleotide) => {
      const rna = dnaToRnaMap[nucleotide as dna];
      if (!rna) throw new Error("Invalid input DNA.");
      return rna;
    })
    .join("");
}
