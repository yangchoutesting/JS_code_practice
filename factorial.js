function fact_recursive(n) {
  if (n === 1) return 1;
  else return n * fact_recursive(n - 1);
}

function fact_iteration(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

console.log(fact_recursive(8));
console.log(fact_iteration(8));
