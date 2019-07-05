//1 - THE DATA MUST BE SORTED

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 28];

const binarySearch = (vector,  x, left, right ) => {
  // console.log('RECURSIVE');

  if (left > right) {
    return false;
  }

  const mid = parseInt(left + ((right - left) / 2));
  console.log(mid);

  if (vector[mid] === x) {
    return true;
  } else if (x < vector[mid]) {
    return binarySearch(vector, x, left, mid - 1);
  } 

  return binarySearch(vector, x, mid + 1, right);
}

const binarySearchInteractive = (vector, x) => {
  let left = 0;
  let right = vector.length - 1;

  while(left <= right) {
    // console.log('INTERACTIVE');
    const mid = parseInt(left + ((right - left) / 2));
    console.log(mid);

    if (vector[mid] === x) {
      return true;
    } else if (x < vector[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }

  return false;
}

const search = (vector, value) => {
  // console.log(`Searching for ${value}`);
  return binarySearch(vector, value, 0, vector.length - 1);
}

const result1 = search(array, 23);
console.log(`Array has 23: ${result1}`);

const result6 = binarySearchInteractive(array, 23);
console.log(`Array has 23: ${result6}`);

// const result2 = search(array, 20);
// console.log(`Array has 20: ${result2}`);

// const result3 = search(array, 1);
// console.log(`Array has 1: ${result3}`);

// const result4 = search(array, 9);
// console.log(`Array has 9: ${result4}`);

// const result5 = binarySearchIteractive(array, 28);
// console.log(`Array has 28: ${result5}`);

