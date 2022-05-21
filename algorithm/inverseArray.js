function inverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  let temp = 0;

  while (left < right) {
    temp = array[right];
    array[right] = array[left];
    array[left] = temp;

    left += 1;
    right -= 1;
  }
  return array;
}

array = [1, 2, 3, 4, 5, 6];
console.log(inverseArray(array));
