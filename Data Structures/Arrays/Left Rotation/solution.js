function leftRotate(n, d, xs) {
 return xs.slice(d).concat(xs.slice(0, d));
}

(function () {
  console.log(leftRotate(5, 4, [1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
  console.log(leftRotate(5, 2, [1, 2, 3, 4, 5])); // [3, 4, 5, 1, 2]
})();