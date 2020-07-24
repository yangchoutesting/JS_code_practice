function bubbleSort(array, N) {
  let temp = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N - i; j++) {
      if (array[j] < array[j - 1]) {
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

data = [1, 6, 4, 3, 5, 2];
console.log(data);
console.log(bubbleSort(data, data.length));
