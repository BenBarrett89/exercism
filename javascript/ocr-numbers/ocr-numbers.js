const ROW_SEPARATOR = "\n"

const NUMBER_MAP = {
  ' _ | ||_|   ': '0',
  '     |  |   ': '1',
  ' _  _||_    ': '2',
  ' _  _| _|   ': '3',
  '   |_|  |   ': '4',
  ' _ |_  _|   ': '5',
  ' _ |_ |_|   ': '6',
  ' _   |  |   ': '7',
  ' _ |_||_|   ': '8',
  ' _ |_| _|   ': '9'
}

const rowToCharacterRows = row => row.match(/.{1,3}/g)

const characterRowsToCharacters = (result, row) => (
  row.map((piece, index) => `${result[index] || ''}${piece}`)
)

const charactersToNumbers = (characters) => NUMBER_MAP[characters] || '?';

const lineToCharacters = line => line
  .map(rowToCharacterRows)
  .reduce(characterRowsToCharacters, [])
  .map(charactersToNumbers)
  .join("")

const rowsToLines = (lines, row, index) => {
  const lineIndex = Math.floor(index / 4);
  const line = lines[lineIndex] || [];
  const newLine = line.concat(row)
  if (lines.length !== lineIndex) lines.pop()
  lines.push(newLine)
  // would love to do without mutation but couldn't figure it out, and this was easier
  return lines
}

export const convert = ocr => ocr
  .split(ROW_SEPARATOR)
  .reduce(rowsToLines, [])
  .map(lineToCharacters)
  .join(",")
