function fibRecursive(n) {
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibArray(n) {
	const arr = [1, 1];
	
	for (let i = 2; i < n; i++) {
		arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[n-1];
}

console.log(fibRecursive(6));
console.log(fibRecursive(10));
console.log(fibArray(6));
console.log(fibArray(10));
