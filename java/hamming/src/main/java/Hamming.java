public class Hamming {
    static int compute(String strandA, String strandB) {
        int hammingDistance = 0;
        if (strandA.length() != strandB.length()) {
            throw new IllegalArgumentException("Strand lengths must be equal to calculate Hamming distance");
        }
        for (int i = 0; i < strandA.length(); i++) {
            int characterDistance = Character.compare(strandA.charAt(i), strandB.charAt(i));
            hammingDistance += (characterDistance != 0) ? 1 : 0;
        }
        return hammingDistance;
    }
}
