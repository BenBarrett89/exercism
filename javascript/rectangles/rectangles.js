const CORNER = '+'
const SEPARATOR = '-'

const ROW_REGEX = /^[\+-]+$/
const COLUMN_REGEX = /^[\+|]+$/

const total = (total, current) => total + current

const getCornerIndices = (indices, current, index) => {
  return current === CORNER ? indices.concat(index) : indices
}

const getConnectedCorners = row => (connections, current, index, indices) => {
  const remaining = indices.slice(index)
  const connected = remaining.reduce((found, right) => {
    const joiningCharacters = row.slice(current, right)
    const isConnectedRow = ROW_REGEX.test(joiningCharacters)
    return isConnectedRow ? found.concat(`${current}${SEPARATOR}${right}`) : found
  }, [])
  return connections.concat(connected)
}

const getLowerRowsWithSameIndices = (rowIndex, indexPair) => (found, lowerRow, lowerRowIndex) => {
  const realLowerRowIndex = lowerRowIndex + rowIndex + 1
  return lowerRow.includes(indexPair) ? found.concat(realLowerRowIndex) : found
}

const checkColumns = (ascii, x1, x2, y1) => (found, y2) => {
  var leftColumn = []
  var rightColumn = []
  for (var i = y1; i <= y2; i++) {
    leftColumn.push(ascii[i][x1])
    rightColumn.push(ascii[i][x2])
  }
  const isLeftColumnUnbroken = COLUMN_REGEX.test(leftColumn.join(""))
  const isRightColumnUnbroken = COLUMN_REGEX.test(rightColumn.join(""))
  return isLeftColumnUnbroken && isRightColumnUnbroken ? found + 1 : found
}

export function count(ascii) {
  return ascii
    .map(row => {
      // capture pairs of connected corners (+s joined only by + and -) on each row
      return row
        .split("")
        .reduce(getCornerIndices, [])
        .reduce(getConnectedCorners(row), [])
      })
      .map((row, rowIndex, rows) => {
        // for each index pair that has the same indices in other rows below them, get the column between them
        // check that both columns are unbroken (is only + and |) - the sum of these is the count
        const lowerRows = rows.slice(rowIndex + 1)
        const rowMatches = row
          .map(indexPair => {
            const [x1, x2] = indexPair.split(SEPARATOR)
            const y1 = rowIndex
            const indexPairMatches = lowerRows
              .reduce(getLowerRowsWithSameIndices(rowIndex, indexPair), [])
              .reduce(checkColumns(ascii, x1, x2, y1), 0)
            return indexPairMatches
          })
          .reduce(total, 0)
        return rowMatches
      })
      .reduce(total, 0)
}
