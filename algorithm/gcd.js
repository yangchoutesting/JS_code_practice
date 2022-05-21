function gcd_r(n1, n2) {
	if (n1 % n2 === 0) return n2;
	else return gcd_r(n2, n1 % n2);
}

function gcd_i(n1, n2) {
	let temp;
	if (n1 % n2 === 0) return n2;
	
	while (n1 % n2 !== 0) {	
		temp = n1 % n2;
		n1 = n2;
		n2 = temp;
	}
	return n2;
}

console.log(gcd_i(30, 72));