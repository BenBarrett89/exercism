const UPPERCASE_OFFSET = 65;
const LOWERCASE_OFFSET = 97;
const LETTER_REGEX = /[a-zA-Z]/;

export const rotate = (letters, transpose) =>
  letters
    .split("")
    .map((letter) => {
      if (!LETTER_REGEX.test(letter)) return letter;
      const letterCode = letter.charCodeAt(0);
      const offset = letterCode >= 97 ? LOWERCASE_OFFSET : UPPERCASE_OFFSET;
      const newCode = ((letterCode - offset + transpose) % 26) + offset;
      return String.fromCharCode(newCode);
    })
    .join("");
