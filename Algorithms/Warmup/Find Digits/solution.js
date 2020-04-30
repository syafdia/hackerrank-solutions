function findDigits(n) {
  return n.toString()
    .split('')
    .map(Number)
    .filter((v) => v !== 0 && n % v === 0)
    .length;
}


(function () {
  console.log(findDigits(12)); // 2
  console.log(findDigits(1012)); // 3
})();