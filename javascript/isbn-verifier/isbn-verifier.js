export const isValid = (isbn) => {
  if (!/^\d-?\d{3}-?\d{5}-?[\d|X]$/.test(isbn)) return false;
  const total = isbn
    .split("")
    .filter((digit) => !/-/.test(digit))
    .reduce((sum, digit, index) => {
      const value = digit === "X" ? 10 : parseInt(digit);
      const factor = 10 - index;
      return sum + value * factor;
    }, 0);
  return total % 11 === 0;
};
