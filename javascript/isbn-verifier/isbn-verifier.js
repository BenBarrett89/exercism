export const isValid = (isbn) =>
  /^\d-?\d{3}-?\d{5}-?[\d|X]$/.test(isbn) &&
  isbn
    .match(/(\d|X$)/g)
    .reduce(
      (sum, digit, index) =>
        sum + (digit === "X" ? 10 : parseInt(digit)) * (10 - index),
      0
    ) %
    11 ===
    0;
