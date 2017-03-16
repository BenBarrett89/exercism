public class HelloWorld {
    public static String hello(String name) {
        String person = isBlankOrNull(name) ? "World" : name;
        return "Hello, " + person + "!";
    }

    private static boolean isBlankOrNull(String string) {
      return string == null || "".equals(string);
    }
}
