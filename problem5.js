function monthlySavings(arr, livingCost) {
  let sum = 0;
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
  }
  for (let ar of arr) {
    if (ar >= 3000) {
      const dis = (ar * 20) / 100;
      ar = ar - dis;
    }
    sum = sum + ar;
  }
  const output = sum - livingCost;
  if (output < 0) {
    return "earn more";
  }
  return output;
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
