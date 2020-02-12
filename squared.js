const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function squareList(array) {
  return _.partition(array, x => (Math.sqrt(x) % 1) === 0);
}

console.log(squareList(numList));