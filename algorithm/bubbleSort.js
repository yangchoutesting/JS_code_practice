function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j] < array[j - 1]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

array = [1, 6, 4, 3, 5, 2];
console.log(`unsorted: ${array}`);
console.log(`sorted: ${bubbleSort(array)}`);
