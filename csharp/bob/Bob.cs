using System;

public static class Bob
{
    private static string DEFAULT_RESPONSE = "Whatever.";
    private static string QUESTION_RESPONSE = "Sure.";
    private static string SILENCE_RESPONSE = "Fine. Be that way!";
    private static string YELLING_RESPONSE = "Whoa, chill out!";

    public static string Response(string statement)
    {
        string response = DEFAULT_RESPONSE;
        if (IsQuestion(statement)) {
          response = QUESTION_RESPONSE;
        }
        else if (IsSilence(statement)) {
          response = SILENCE_RESPONSE;
        }
        else if (IsYelling(statement)) {
          response = YELLING_RESPONSE;
        }
        return response;
    }

    private static bool IsQuestion(string statement)
    {
      return statement.EndsWith("?");
    }

    private static bool IsSilence(string statement)
    {
      return false;
    }

    private static bool IsYelling(string statement)
    {
      return statement.ToUpper() == statement;
    }
}
