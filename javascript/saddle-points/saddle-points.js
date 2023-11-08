const findCandidatesInRow =
  (matrix, rowIndex) => (result, tree, columnIndex) => {
    if (tree >= result.biggest) {
      const othersInColumn = new Array(matrix.length)
        .fill(null)
        .reduce((others, _, otherIndex) => {
          return otherIndex === rowIndex
            ? others
            : others.concat(matrix[otherIndex][columnIndex]);
        }, []);
      const smallestInColumn =
        othersInColumn.findIndex((other) => other < tree) === -1;
      const thisTree = {
        row: rowIndex + 1,
        column: columnIndex + 1,
      };
      return smallestInColumn
        ? {
            row: rowIndex,
            biggest: tree,
            candidates:
              tree === result.biggest
                ? result.candidates.concat(thisTree)
                : [thisTree],
          }
        : tree > result.biggest
        ? {
            row: rowIndex,
            biggest: tree,
            candidates: [],
          }
        : result;
    } else return result;
  };

const findCandidates = (row, rowIndex, matrix) => {
  return row.reduce(findCandidatesInRow(matrix, rowIndex), {
    row: rowIndex,
    biggest: 0,
    candidates: [],
  });
};

export const saddlePoints = (treeMatrix) => {
  return treeMatrix
    .map(findCandidates)
    .reduce((candidates, row) => candidates.concat(row.candidates), []);
};
