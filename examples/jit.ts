const rightNow = performance.now();
const iile1 = (function () {
  return performance.now();
})();

const def = function () {
  return performance.now();
};

const defValue = def();
const iile2 = (function () {
  return performance.now();
})();

console.log({ def: def(), rightNow, defValue, iile1, iile2 });

const thenTime = performance.now();
console.log(thenTime);

/*

  rightNow: 4876779988408,
  iile1: 490735001862,
  def: 502976000309,
  iile2: 4914579987526
  thenTime :1.9914209991693
}
 */
