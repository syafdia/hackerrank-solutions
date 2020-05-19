function breakingRecords(scores) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  let breakMax = -1;
  let breakMin = -1;

  for (const score of scores.map((v) => v + 1)) {

    if (score > max) {
      max = score;
      breakMax++;
    }

    if (score < min) {
      min = score;
      breakMin++;
    }
  }

  return [breakMax, breakMin];
}


(function () {
  console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // [4, 0]
  console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2, 4]
  console.log(breakingRecords([0, 9, 3, 10, 2, 20])); // [3, 0]
})();