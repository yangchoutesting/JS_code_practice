function binarySearch_r(array, target, left, right) {
  if (array[left] === target) {
    return left;
  }
  if (array[right] === target) {
    return right;
  }

  if (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] > target) {
      return binarySearch_r(array, target, left, mid - 1);
    }

    if (array[mid] <= target) {
      return binarySearch_r(array, target, mid + 1, right);
    }
  }

  return -1;
}

function binarySearch_i(array, target) {
  let left = 0;
  let right = array.length - 1;

  if (array[left] === target) {
    return left;
  }
  if (array[right] === target) {
    return right;
  }

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
      continue;
    }

    if (array[mid] >= target) {
      right = mid - 1;
      continue;
    }
  }

  return -1;
}

array = [1, 2, 6, 8, 9, 13, 26, 67, 78];
for (let i = 1; i < 10; i++) {
  console.log(`find ${i}`);
  console.log(`Found it at : ${binarySearch_r(array, i, 0, array.length)}`);
  console.log(`Fount it at : ${binarySearch_i(array, i)}`);
}
