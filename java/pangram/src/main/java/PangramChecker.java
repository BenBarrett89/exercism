import java.util.Arrays;
import java.util.HashSet;

class PangramChecker {
    private static final String NON_ALPHABETIC = "[^a-z]+";

    boolean isPangram(String sentence) {
        HashSet<String> letters = getLetters(sentence);
        return letters.size() == 26;
    }

    private static HashSet<String> getLetters(String sentence) {
        return new HashSet<>(Arrays.asList(sentence.toLowerCase().replaceAll(NON_ALPHABETIC, "").split("")));
    }
}
