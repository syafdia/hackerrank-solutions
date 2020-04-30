

function birthdayCakeCandles(ar) {
  return Object.entries(ar.reduce((acc, v) => {
      if (typeof acc[v] === 'undefined') {
        acc[v] = 0;
      }

      acc[v]++;

      return acc;
    }, new Map()))
    .reduce((acc, [_, v]) => v > acc ? v : acc, Number.MIN_VALUE);
}

(function () {
  console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2
})();