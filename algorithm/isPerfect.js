function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  if (sum === n) return 1;
  else return 0;
}

console.log(isPerfect(6));
console.log(isPerfect(36));
