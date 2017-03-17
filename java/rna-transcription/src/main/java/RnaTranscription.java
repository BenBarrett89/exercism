import java.lang.Character;
import java.lang.StringBuilder;
import java.util.HashMap;
import java.util.Map;

class RnaTranscription {
    private static final Map<String, String> DNA_TO_RNA;
    static {
      DNA_TO_RNA = new HashMap<>();
      DNA_TO_RNA.put("G", "C");
      DNA_TO_RNA.put("C", "G");
      DNA_TO_RNA.put("T", "A");
      DNA_TO_RNA.put("A", "U");
    }

    String ofDna(String dnaString) throws IllegalArgumentException {
        StringBuilder rnaStringBuilder = new StringBuilder();
        for (int i = 0; i < dnaString.length(); i++) {
          String dna = Character.toString(dnaString.charAt(i));
           if (DNA_TO_RNA.containsKey(dna)){
             rnaStringBuilder.append(DNA_TO_RNA.get(dna));
           } else {
               throw new IllegalArgumentException("Unrecognised DNA Nucleotide");
           }
        }
        return rnaStringBuilder.toString();
    }
}
