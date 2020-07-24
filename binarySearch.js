function binarySearch_r(array, data, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (data === array[mid]) {
      console.log("found! " + data);
      return mid;
    } else if (data < array[mid])
      return binarySearch_r(array, data, left, mid - 1);
    else return binarySearch_r(array, data, mid + 1, right);
  }
  return -1;
}

function binarySearch_i(array, size, data) {
  let left = 0;
  let right = size - 1;
  let mid = 0;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] === data) {
      console.log("found! " + data);
      return mid;
    } else if (data[mid] < data) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

array = [1, 2, 6, 8, 9, 13, 26, 67, 78];
console.log(binarySearch_r(array, 9, 0, 9));
console.log(binarySearch_i(array, array.length, 6));
