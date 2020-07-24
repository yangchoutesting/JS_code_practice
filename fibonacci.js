function fib_recursive(n) {
  if (n <= 2) return 1;
  return fib_recursive(n - 1) + fib_recursive(n - 2);
}

function fib_iteration(n) {
  if (n < 2) return 1;
  else {
    let current = 0;
    let prev_1 = 1;
    let prev_2 = 1;

    for (let i = 3; i <= n; i++) {
      current = prev_1 + prev_2;
      prev_2 = prev_1;
      prev_1 = current;
    }
    return current;
  }
}

console.log(fib_recursive(6));
console.log(fib_iteration(6));
