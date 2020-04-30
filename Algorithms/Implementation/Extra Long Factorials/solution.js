function extraLongFactorials(n) {
  let result = BigInt(1);

  for (let i = BigInt(1); i <= n; i++) {
    result *= i;
  }

  return result.toString();
}


(function () {
  console.log(extraLongFactorials(25)); // 2
})();