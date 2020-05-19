

function birthday(s, d, m) {
  let ways = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }

    if (sum === d) {
      ways++;
    }
    
  }

  return ways;
}


(function () {
  console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // 2
  console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); // 0
  console.log(birthday([4], 4, 1)); // 1
})();