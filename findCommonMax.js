function testCase() {
	const arr1 = [1, 2, 4, 5, 6];
	const arr2 = [3, 4, 5, 6];
	const arr3 = [4, 5, 6];
	return [arr1, arr2, arr3];
}


function main() {
	const [arr1, arr2, arr3] = testCase();
	const result = findCommonMax(arr1, arr2, arr3);
	
	console.log(`The common maximum number of arrays is ${result}.`);
}


function findCommonMax(arr1, arr2, arr3) {
	const map = new Map();
	addNumberCountToMap(arr1, map);
	addNumberCountToMap(arr2, map); 
	addNumberCountToMap(arr3, map); 
	
	return getCommonMax(map);
}


function addNumberCountToMap(arr, map) {
	for (const num of arr) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
			continue;
		}
		map.set(num, 1);
	}
	return map;
}


function getCommonMax(map) {
	let tempMax = -1;
	for (const [key, value] of map) {
		if (value >= 3 && key > tempMax) {
			tempMax = key;
		}
	}
	return tempMax;
}


main();
