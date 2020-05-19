function dynamicArray(n, queries) {
  let lastAnswer = 0;
  const s = {};
  const results = [];

  for (const [qType, x, y] of queries) {
    
    const i = (x ^ lastAnswer) % n;
    if (!s.hasOwnProperty(i)) {
      s[i] = [];
    }

    switch (qType) {
      case 1:
        s[i].push(y);
        break;

      case 2:
        lastAnswer = s[i][y % s[i].length];
        results.push(lastAnswer);
        break;
    }
  }

  return results;
}


(function () {
  console.log(dynamicArray(2, [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ])); // [7, 3]
})();