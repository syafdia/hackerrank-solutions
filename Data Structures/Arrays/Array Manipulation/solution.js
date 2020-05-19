function arrayManipulation(n, queries) {
  const prefixSums = [];
  for (let i = 0; i < n; i++) {
    prefixSums[i] = 0;
  }

  for (const [a, b, k] of queries) {
    prefixSums[a - 1] += k;
    prefixSums[b - 1] -= k;
  }

  const rows = [];
  let currentNumber = 0;
  for (let i = 0; i < prefixSums.length; i++) {
    const val = prefixSums[i];
    currentNumber += val;
    rows.push(currentNumber);
  }

  console.log(prefixSums);
  console.log(rows);

  return rows.reduce((acc, v) => v > acc ? v : acc, Number.MIN_VALUE);
}

(function () {
  console.log(arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])); // 10
  console.log(arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])); // 200
})();