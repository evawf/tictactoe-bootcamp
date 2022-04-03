function sameValue(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== temp) {
      return false;
    }
  }
  // return true or false;
  return true;
}

let testArray = [2, 2, 2];

if (sameValue(testArray)) {
  console.log("All values are identical");
} else {
  console.log("Not all values are identical");
}
